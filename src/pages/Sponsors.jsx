"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import PageHeader from "../components/common/PageHeader";

const EmblaSponsorCarousel = ({
  items,
  options = { loop: true, align: "center", dragFree: true },
  autoPlayMs = 2000,
}) => {
  const [viewportRef, embla] = useEmblaCarousel(options);
  const autoplayRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // autoplay
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    if (!embla) return;
    autoplayRef.current = setInterval(() => {
      if (!embla) return;
      embla.scrollNext();
    }, autoPlayMs);
  }, [embla, autoPlayMs]);

  useEffect(() => {
    if (!embla) return;
    if (!isPaused) startAutoplay();
    return () => clearInterval(autoplayRef.current);
  }, [embla, startAutoplay, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    clearInterval(autoplayRef.current);
  };
  const handleMouseLeave = () => {
    setIsPaused(false);
    startAutoplay();
  };

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden" ref={viewportRef}>
        <div className="flex will-change-transform">
          {items.map((s, idx) => (
            <motion.div
              key={idx}
              className="flex-[0_0_80%] sm:flex-[0_0_60%] md:flex-[0_0_40%] lg:flex-[0_0_30%] px-4"
              whileHover={{ scale: 1.03 }}
            >
              <div className="p-6 bg-black/40 rounded-2xl border border-[#00ffff]/20 hover:border-[#00ffff]/50 transition-all duration-500 flex flex-col items-center">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-48 h-48 object-contain mb-4"
                />
                <p className="text-[#00ffff] font-semibold text-center text-xl">
                  {s.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* arrows */}
      <button
        onClick={scrollPrev}
        aria-label="Previous"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-[#00ffff]/20 hover:border-[#00ffff]/50"
      >
        <span className="text-[#00ffff]">&larr;</span>
      </button>

      <button
        onClick={scrollNext}
        aria-label="Next"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-[#00ffff]/20 hover:border-[#00ffff]/50"
      >
        <span className="text-[#00ffff]">&rarr;</span>
      </button>
    </div>
  );
};

const Sponsors = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/sponsors/marketing_Brouchure.pdf";
    link.download = "MUN_IIT_Indore_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const pastSponsors = [
    { name: "Shankar IAS", image: "/sponsors/shankar.jpg", }, { name: "HitBullsEye", image: "/sponsors/hitbulleye.png", }, { name: "Lawctopus", image: "/sponsors/lawtopus.png", }, { name: "Simple Body Talk", image: "/sponsors/simplebodytalks.webp", }, { name: "ED Times", image: "/sponsors/edtimes.jpeg", }, { name: "Startup News FYI", image: "/sponsors/startupnews.jpeg", }, { name: "Global Hues", image: "/sponsors/theglobalhues.webp", }, { name: "DU Beat", image: "/sponsors/dubeats.jpeg", }, { name: "Shape", image: "/sponsors/shape.jpg", },
  ];

  return (
    <section className="relative min-h-screen text-white overflow-hidden bg-black">
      {/* animated bg */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(0,255,255,0.4) 0%, transparent 60%)`,
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,255,0.08)_0%,transparent_60%)] opacity-40"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <PageHeader
        title="Sponsors"
        subtitle="Partners who make MUN IIT Indore possible"
      />

      {/* 2025 sponsors */}
      <section className="py-20 px-6 md:px-12 relative z-10 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#00ffff] mb-4"
          animate={{
            textShadow: [
              "0 0 10px rgba(0,255,255,0.3)",
              "0 0 20px rgba(0,255,255,0.5)",
              "0 0 10px rgba(0,255,255,0.3)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          MUN IIT Indore 2026 Sponsors
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* <p className="text-gray-400 text-lg mt-12">
          <span className="text-[#00ffff] font-semibold">
            Sponsors will be announced soon!
          </span>{" "}
          Stay tuned.

        </p> */}
        {/* <hr className="border-gray-600 pt-10"  /> */}
    {/* Content */}
          <div className="relative py-10 px-20 z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Download the <span className="text-[#00ffff]">Marketing Brochure</span>
              </h2>
              <p className="text-white max-w-2xl">
                Get comprehensive information regarding marketing, branding and sponosrship in our official brochure.

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
                className="bg-[#00ffff] text-black px-8 py-4 rounded-full font-bold text-lg  transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                Download Brochure
              </motion.button>
            </motion.div>
          </div>
      </section>

      {/* past sponsors */}
      <section className="py-20 px-6 md:px-12 relative z-10 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#00ffff] mb-4"
          animate={{
            textShadow: [
              "0 0 10px rgba(0,255,255,0.3)",
              "0 0 20px rgba(0,255,255,0.5)",
              "0 0 10px rgba(0,255,255,0.3)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          Past Year Sponsors
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <div className="max-w-6xl mx-auto mt-10">
          <EmblaSponsorCarousel items={pastSponsors} autoPlayMs={2500} />
        </div>
      </section>
    </section>
  );
};

export default Sponsors;