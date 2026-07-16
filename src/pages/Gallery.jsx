"use client";

import { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import {
  AnimatedBackground,
  FloatingParticles,
  MouseGlow,
} from "../components/FloatingParticles";
import { motion } from "framer-motion";
import img1 from "../assets/gallery/img1.JPG";
import img2 from "../assets/gallery/img2.JPG";
import img3 from "../assets/gallery/img3.JPG";
import img4 from "../assets/gallery/img4.JPG";
import img5 from "../assets/gallery/img5.JPG";
import img6 from "../assets/gallery/img6.JPG";
import img7 from "../assets/gallery/img7.JPG";
import img8 from "../assets/gallery/img8.JPG";
import img9 from "../assets/gallery/img9.JPG";

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
];

function Gallery() {
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="overflow-hidden rounded-2xl bg-black/30 backdrop-blur-md border border-[#00ffff]/20 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:-rotate-1 animate-on-scroll cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={photo.src}
                    alt={`Event ${photo.id}`}
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:brightness-110 hover:saturate-110 hover:contrast-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
