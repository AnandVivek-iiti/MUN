"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

const EmblaCarousel = ({ sponsors }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: true,
  });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2500); // auto-slide every 2.5s
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            className="flex-[0_0_60%] md:flex-[0_0_33%] lg:flex-[0_0_25%] p-6 flex justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-black/40 border border-[#00ffff]/30 rounded-2xl p-6 flex flex-col items-center justify-center transition-all hover:border-[#00ffff]/60 duration-300">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-28 h-28 object-contain mb-4"
              />
              <p className="text-[#00ffff] font-semibold text-center">
                {sponsor.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
