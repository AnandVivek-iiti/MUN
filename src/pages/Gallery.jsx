"use client";

import { useEffect, useState, useCallback } from "react";
import PageHeader from "../components/common/PageHeader";
import {
  AnimatedBackground,
  FloatingParticles,
  MouseGlow,
} from "../components/common/FloatingParticles";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../assets/gallery/img1.JPG";
import img2 from "../assets/gallery/img2.JPG";
import img3 from "../assets/gallery/img3.JPG";
import img4 from "../assets/gallery/img4.JPG";
import img5 from "../assets/gallery/img5.JPG";
import img6 from "../assets/gallery/img6.JPG";
import img7 from "../assets/gallery/img7.JPG";
import img8 from "../assets/gallery/img8.JPG";
import img9 from "../assets/gallery/img9.JPG";

const galleryPhotos = [
  { id: 1, src: img1, caption: "Event photo 1" },
  { id: 2, src: img2, caption: "Event photo 2" },
  { id: 3, src: img3, caption: "Event photo 3" },
  { id: 4, src: img4, caption: "Event photo 4" },
  { id: 5, src: img5, caption: "Event photo 5" },
  { id: 6, src: img6, caption: "Event photo 6" },
  { id: 7, src: img7, caption: "Event photo 7" },
  { id: 8, src: img8, caption: "Event photo 8" },
  { id: 9, src: img9, caption: "Event photo 9" },
];

function Gallery() {
  const [photos] = useState(galleryPhotos);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animate-fade-in-up");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [photos]);

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const showPrev = useCallback(
    (e) => {
      e?.stopPropagation();
      setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + photos.length) % photos.length));
    },
    [photos.length]
  );

  const showNext = useCallback(
    (e) => {
      e?.stopPropagation();
      setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % photos.length));
    },
    [photos.length]
  );

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeLightbox, showPrev, showNext]);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <FloatingParticles />
      <MouseGlow />

      <PageHeader title="Gallery" subtitle="Past Memories" />

      <section className="py-20 px-4 relative overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-radial from-[#89f8fa]/10 via-black to-black blur-3xl" />
          <div className="absolute top-20 right-1/4 w-80 h-80 bg-[#89f8fa]/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-32 left-1/5 w-96 h-96 bg-[#89f8fa]/15 rounded-full blur-2xl animate-float-slower" />
          <div className="absolute top-1/2 left-16 w-72 h-72 bg-[#89f8fa]/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#00ffff] mb-4"
              animate={{
                textShadow: [
                  "0 0 10px rgba(0,255,255,0.3)",
                  "0 0 20px rgba(0,255,255,0.5)",
                  "0 0 10px rgba(0,255,255,0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Our Events
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>

          {photos.length === 0 ? (
            <p className="text-center text-white/50 py-20">No photos yet — check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {photos.map((photo, index) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="text-left overflow-hidden rounded-2xl bg-black/30 backdrop-blur-md border border-[#00ffff]/20 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:-rotate-1 animate-on-scroll cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00ffff]/60"
                  style={{ animationDelay: `${(index % 9) * 0.1}s` }}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={photo.src}
                      alt={photo.caption || `Event photo ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:brightness-110 hover:saturate-110 hover:contrast-105"
                    />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-[#00ffff] hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              type="button"
              onClick={showPrev}
              className="absolute left-4 md:left-8 text-[#00ffff] hover:text-white transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-9 h-9 md:w-10 md:h-10" />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[selectedIndex].src}
                alt={photos[selectedIndex].caption || `Event photo ${selectedIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-xl border border-[#00ffff]/30 shadow-2xl"
              />
            </motion.div>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-4 md:right-8 text-[#00ffff] hover:text-white transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-9 h-9 md:w-10 md:h-10" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {selectedIndex + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
