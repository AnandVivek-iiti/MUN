"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UserRound, MessageSquareQuote } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { testimonials } from "../data/testimonials";

const PastEditions = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const galleryData = [
    { image: "/1.png", description: "MUN IIT Indore 2023 Opening Ceremony" },
    { image: "/2.JPG", description: "Delegates during Committee Sessions" },
    { image: "/3.JPG", description: "Keynote Address by Chief Guest" },
    { image: "/4.JPG", description: "Award Ceremony Moments" },
    { image: "/5.JPG", description: "Cultural Evening Highlights" },
    { image: "/6.JPG", description: "Closing Ceremony Snapshot" },
  ];

  // Placeholder cards — chief guests for this edition are yet to be announced
  const chiefGuestPlaceholders = [1, 2];

  return (
    <section className="relative min-h-screen text-white overflow-hidden bg-black">
      {/* === Animated Glowing Background === */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,255,255,0.4) 0%, transparent 60%)`,
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,255,0.08)_0%,transparent_60%)] opacity-40"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      {/* Floating particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00ffff] rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <PageHeader title="Past Editions" subtitle="Moments that shaped our legacy" />

      {/* === Previous Year Highlights === */}
      <section className="py-20 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-12">
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
            Previous Year Highlights
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 bg-black/40 p-8 rounded-2xl border border-[#00ffff]/20 hover:border-[#00ffff]/40 transition-all duration-500">
          <motion.img
            src="/PE.JPG"
            alt="MUN IIT Indore 9.0"
            className="rounded-xl shadow-lg w-full md:w-1/2"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
          />

          <div className="flex flex-col gap-5 text-gray-300 text-lg leading-relaxed md:w-1/2">
            <p>
              <strong>MUN IIT Indore 9.0</strong> embodied the spirit of{" "}
              <span className="text-[#00ffff]">Diplomacy, Debate, and Deliver</span> with unmatched passion and precision.
              Held on the scenic IIT Indore campus, the 8th edition brought together brilliant minds from across the
              country to engage in intellectually charged discussions that mirrored real-world diplomacy.
            </p>

            <p>
              From intense committee sessions and thought-provoking agendas to seamless management and vibrant socials,
              every moment of MUN 8.0 reflected the dedication and excellence of its organizing team. Delegates tackled
              pressing global issues, challenged perspectives, and forged meaningful connections that transcended
              committee walls.
            </p>

            <p>
              With its flawless execution, engaging debates, and inspiring energy, <strong>MUN IIT Indore 9.0</strong>{" "}
              wasn’t just a conference — it was a celebration of ideas, leadership, and collaboration. The edition truly
              lived up to its essence:{" "}
              <span className="italic text-[#00ffff]">Diplomacy. Debate. Deliver.</span>
            </p>
          </div>
        </div>
      </section>

      {/* === Gallery === */}
      <section className="py-20 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-12">
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
            Gallery
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-400 text-lg">Capturing timeless MUN IIT Indore moments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryData.map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-black/40 border border-[#00ffff]/10 hover:border-[#00ffff]/40 transition-all duration-500 group"
              whileHover={{ y: -4 }}
            >
              <motion.img
                src={item.image}
                alt={item.description}
                className="w-full h-72 object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 p-4 text-left">
                <p className="text-[#00ffff] font-medium">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === Chief Guests (Placeholder — TBA) === */}
      <section className="py-20 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-12">
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
            Chief Guests
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-400 text-lg">To be announced</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 justify-center">
          {chiefGuestPlaceholders.map((placeholder, index) => (
            <motion.div
              key={index}
              className="relative bg-black/50 p-8 rounded-2xl border border-[#00ffff]/20 hover:border-[#00ffff]/40 transition-all duration-500 w-80 mx-auto text-center"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-36 h-36 rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-dashed border-[#00ffff]/40 bg-[#00ffff]/5"
                animate={{
                  borderColor: [
                    "rgba(0,255,255,0.3)",
                    "rgba(0,255,255,0.6)",
                    "rgba(0,255,255,0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <UserRound className="w-14 h-14 text-[#00ffff]/50" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white/60">To Be Announced</h3>
              <p className="text-[#00ffff]/60">Details coming soon</p>
              <div className="text-gray-500 mt-1">2026</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === Testimonials (Coming Soon) === */}
      <section className="py-20 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-12">
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
            Testimonials
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>

        <motion.div
          className="max-w-2xl mx-auto text-center bg-black/40 border border-[#00ffff]/20 rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <MessageSquareQuote className="w-10 h-10 text-[#00ffff]/50 mx-auto mb-4" />
          <p className="text-gray-400 text-lg">Testimonials will be added later.</p>
        </motion.div>
      </section>
    </section>
  );
};

export default PastEditions;