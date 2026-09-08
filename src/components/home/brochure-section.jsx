"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

const BROCHURE_URL = "/MUN 10.0 Outreach Broucher.pdf";

export function BrochureSection() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = BROCHURE_URL;
    link.download = "MUN 10.0 Outreach Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-md border border-[#00ffff]/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Glowing background accent */}
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-[#00ffff] rounded-full mix-blend-screen filter blur-xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Download the <span className="text-[#00ffff]">Official Brochure</span>
              </h2>
              <p className="text-white/70 max-w-2xl">
                Get comprehensive information about committees, schedules, accommodation, and registration details in our official brochure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="bg-[#00ffff] text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-[#00ffff]/20 hover:shadow-[#00ffff]/40 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                Download Brochure
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}