

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const abs = (v) => path.resolve(ROOT, v);

// ---------------------------------------------------------------- config ---
const args = process.argv.slice(2);
const QUALITY = Number(args[args.indexOf("--quality") + 1]) || 80;
const DRY_RUN = args.includes("--dry-run");
const NO_ROTATE = args.includes("--no-rotate");

const dirsArg = args.indexOf("--dirs");
const DIRS =
  dirsArg !== -1 && args[dirsArg + 1] && !args[dirsArg + 1].startsWith("-")
    ? args.slice(dirsArg + 1).filter((a) => !a.startsWith("-")).map(abs)
    : [abs("public"), abs("src/assets")];

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]);

// Files scanned for image references to rewrite (all under src/ + index.html)
const REF_SCAN_DIRS = [abs("src"), abs("index.html")];
const REF_EXTS = new Set([".js", ".jsx", ".mjs", ".ts", ".tsx", ".html", ".css"]);
const SKIP_DIRS = new Set(["node_modules", ".git"]);

// ---------------------------------------------------------------- helpers ---
async function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (entry.isFile()) out.push(full);
  }
  return out;
}

const fileSize = async (f) => {
  try {
    return (await fs.stat(f)).size;
  } catch {
    return 0;
  }
};

const rel = (f) => path.relative(ROOT, f).split(path.sep).join("/");

// ------------------------------------------------------------ state --------
let converted = 0;
let skipped = 0;
let savedBytes = 0;
const renamePairs = new Map(); // "name.ext" -> "name.webp" (lowercased key)

function registerRename(file) {
  const ext = path.extname(file); // includes leading dot
  const base = path.basename(file, ext);
  const from = `${base}${ext}`;
  const to = `${base}.webp`;
  // lower-case key so we also match differently-cased references
  renamePairs.set(from.toLowerCase(), { from, to });
}

// ------------------------------------------------------------------ main ---
let sharp;
try {
  sharp = require("sharp");
} catch {
  console.error(
    "[optimize-images] 'sharp' is not installed.\n" +
    "Install it first:  npm i -D sharp\n" +
    "Then run:          npm run optimize:images"
  );
  process.exit(1);
}

async function convertImage(file) {
  const sizeBefore = await fileSize(file);
  if (!sizeBefore) {
    skipped++;
    return;
  }
  const webp = `${file.slice(0, -path.extname(file).length)}.webp`;
  const out = DRY_RUN ? `${webp}.dry` : webp;

  try {
    const pipeline = sharp(file, { animated: true });
    if (NO_ROTATE) {
      pipeline.rotate(0); // disable auto EXIF orientation
    } else {
      pipeline.rotate(); // apply EXIF orientation, bake into pixels
    }
    await pipeline.webp({ quality: QUALITY }).toFile(out);
  } catch (err) {
    skipped++;
    console.warn(
      `[optimize-images] SKIP (conversion failed): ${rel(file)} — ${err.message}`
    );
    if (DRY_RUN) {
      try { await fs.unlink(out); } catch { /* ignore */ }
    }
    return;
  }

  const sizeAfter = await fileSize(out);
  const saved = Math.max(0, sizeBefore - sizeAfter);
  const pct = sizeBefore ? Math.round((saved / sizeBefore) * 100) : 0;

  if (!DRY_RUN) {
    await fs.unlink(file);                 // in-place replace
    registerRename(file);                  // remember for reference rewrite
    savedBytes += saved;
  } else {
    try { await fs.unlink(out); } catch { /* ignore */ }
  }

  converted++;
  console.log(
    `  ✔ ${rel(file).padEnd(64)} ${(sizeBefore / 1024).toFixed(0).padStart(6)}kB → ` +
    `${(Math.max(0, sizeAfter) / 1024).toFixed(0).padStart(6)}kB   -${String(pct).padStart(3)}%`
  );
}

async function rewriteReferences() {
  if (!renamePairs.size) return;

  // Collect every file to scan
  const files = [];
  for (const target of REF_SCAN_DIRS) {
    const st = await fs.stat(target).catch(() => null);
    if (!st) continue;
    files.push(...(st.isFile() ? [target] : await walk(target)));
  }
  const targets = files.filter((f) => REF_EXTS.has(path.extname(f).toLowerCase()));

  const touched = new Set();
  for (const f of targets) {
    let content = await fs.readFile(f, "utf8");
    let changed = false;
    for (const { from, to } of renamePairs.values()) {
      if (content.includes(from)) {
        content = content.split(from).join(to);
        changed = true;
      } else if (content.includes(from.toLowerCase())) {
        content = content.split(from.toLowerCase()).join(to);
        changed = true;
      }
    }
    if (changed) {
      if (DRY_RUN) {
        touched.add(rel(f));
      } else {
        await fs.writeFile(f, content, "utf8");
        touched.add(rel(f));
      }
    }
  }

  if (touched.size) {
    console.log(`\n[optimize-images] ${DRY_RUN ? "WOULD update" : "Updated"} .webp references in:`);
    [...touched].sort().forEach((f) => console.log(`  ↦ ${f}`));
  }
}

async function main() {
  console.log(`[optimize-images] ${DRY_RUN ? "DRY RUN — no files will be modified" : "Running"}`);
  console.log(`[optimize-images] dirs:    ${DIRS.join(", ")}`);
  console.log(`[optimize-images] quality: ${QUALITY}\n`);

  const files = (await Promise.all(DIRS.map(walk))).flat();
  const images = files.filter((f) => IMAGE_EXT.has(path.extname(f)));
  console.log(`[optimize-images] found ${images.length} image(s)\n`);

  for (const img of images) await convertImage(img);
  await rewriteReferences();

  console.log(`\n========== SUMMARY ==========`);
  console.log(`Converted : ${converted}`);
  console.log(`Skipped   : ${skipped}`);
  if (!DRY_RUN) console.log(`Savings   : ${(savedBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`==============================`);
}

main().catch((err) => {
  console.error("[optimize-images] Fatal:", err);
  process.exit(1);
});