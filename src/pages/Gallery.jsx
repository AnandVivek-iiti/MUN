"use client";

import { useEffect, useState, useCallback } from "react";
import PageHeader from "../components/PageHeader";
import {
  AnimatedBackground,
  FloatingParticles,
  MouseGlow,
} from "../components/FloatingParticles";
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

// === PLACEHOLDER: add imports for the remaining photos (img10 → img25) below ===
// import img10 from "../assets/gallery/img10.JPG";
// import img11 from "../assets/gallery/img11.JPG";
// import img12 from "../assets/gallery/img12.JPG";
// import img13 from "../assets/gallery/img13.JPG";
// import img14 from "../assets/gallery/img14.JPG";
// import img15 from "../assets/gallery/img15.JPG";
// import img16 from "../assets/gallery/img16.JPG";
// import img17 from "../assets/gallery/img17.JPG";
// import img18 from "../assets/gallery/img18.JPG";
// import img19 from "../assets/gallery/img19.JPG";
// import img20 from "../assets/gallery/img20.JPG";
// import img21 from "../assets/gallery/img21.JPG";
// import img22 from "../assets/gallery/img22.JPG";
// import img23 from "../assets/gallery/img23.JPG";
// import img24 from "../assets/gallery/img24.JPG";
// import img25 from "../assets/gallery/img25.JPG";
// === END PLACEHOLDER ===

const eventPhotos = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
  { id: 8, src: img8 },
  { id: 9, src: img9 },
  // { id: 10, src: img10 },
  // { id: 11, src: img11 },
  // { id: 12, src: img12 },
  // { id: 13, src: img13 },
  // { id: 14, src: img14 },
  // { id: 15, src: img15 },
  // { id: 16, src: img16 },
  // { id: 17, src: img17 },
  // { id: 18, src: img18 },
  // { id: 19, src: img19 },
  // { id: 20, src: img20 },
  // { id: 21, src: img21 },
  // { id: 22, src: img22 },
  // { id: 23, src: img23 },
  // { id: 24, src: img24 },
  // { id: 25, src: img25 },
  // === END PLACEHOLDER ===
];

function Gallery() {
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
    handleScroll(); // run once on mount so already-visible cards animate in
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const showPrev = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + eventPhotos.length) % eventPhotos.length
    );
  }, []);

  const showNext = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % eventPhotos.length
    );
  }, []);

  // Keyboard navigation for the lightbox
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

          {/* Responsive grid: 1 col on mobile, 2 on tablet, 3 on desktop, 4 on large screens.
              With 25 photos this keeps rows reasonably even and avoids overly long single columns. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {eventPhotos.map((photo, index) => (
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
                    alt={`Event ${photo.id}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:brightness-110 hover:saturate-110 hover:contrast-105"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox for viewing a photo full-size with prev/next navigation */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-[#00ffff] hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev button */}
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
                src={eventPhotos[selectedIndex].src}
                alt={`Event ${eventPhotos[selectedIndex].id}`}
                className="max-w-full max-h-[85vh] object-contain rounded-xl border border-[#00ffff]/30 shadow-2xl"
              />
            </motion.div>

            {/* Next button */}
            <button
              type="button"
              onClick={showNext}
              className="absolute right-4 md:right-8 text-[#00ffff] hover:text-white transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-9 h-9 md:w-10 md:h-10" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {selectedIndex + 1} / {eventPhotos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;