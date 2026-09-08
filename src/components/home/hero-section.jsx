"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, ArrowLeft, Clock } from "lucide-react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showRegisterSoon, setShowRegisterSoon] = useState(false);

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

  return (
    <section
      id="home"
       className="relative min-h-screen flex items-center justify-center px-4 pt-20 md:pt-24 pb-16 overflow-hidden"
    >
      {/* Dynamic background glow following mouse */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #00ffff 0%, transparent 60%)`,
        }}
      />

      {/* Subtle grid animation background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 grid-rows-12 h-full w-full">
          {Array.from({ length: 240 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-[#00ffff]/20"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                borderColor: [
                  "rgba(0,255,255,0.1)",
                  "rgba(0,255,255,0.3)",
                  "rgba(0,255,255,0.1)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.01,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 border border-[#00ffff]/40"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-32 right-32 w-12 h-12 border border-[#00ffff]/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-8 h-8 bg-[#00ffff]/20 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center w-full">
        <AnimatePresence mode="wait">
          {showRegisterSoon ? (
            /* ===== Register Coming Soon panel ===== */
            <motion.div
              key="register-soon"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center gap-6 px-4"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0,255,255,0.3)",
                    "0 0 40px rgba(0,255,255,0.5)",
                    "0 0 20px rgba(0,255,255,0.3)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="w-20 h-20 rounded-full border-2 border-[#00ffff]/60 flex items-center justify-center"
              >
                <Clock className="w-9 h-9 text-[#00ffff]" />
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-[#00ffff] via-white to-[#00ffff] bg-clip-text text-transparent">
                Registrations Opening Soon
              </h2>
              <p className="text-white/70 text-base md:text-lg max-w-xl">
                We're putting the final touches on registration for MUN IITI 10.0. Check back
                shortly — we can't wait to have you at the conference.
              </p>

              <motion.button
                onClick={() => setShowRegisterSoon(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 flex items-center gap-2 border border-[#00ffff]/50 text-[#00ffff] px-6 py-3 rounded-full font-semibold hover:bg-[#00ffff]/10 transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </motion.button>
            </motion.div>
          ) : (
            /* ===== Default Hero content ===== */
            <motion.div
              key="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* === LOGO === */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotateY: -180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 120 }}
                className="relative mb-6"
              >
                <motion.div
                  className="relative w-36 h-36 md:w-48 md:h-48 mx-auto group cursor-pointer"
                  whileHover="hover"
                  variants={{
                    hover: {
                      scale: 1.15,
                      transition: { duration: 0.3, type: "spring", stiffness: 300 },
                    },
                  }}
                >
                  {/* Outer animated ring */}
                  <motion.div
                    className="absolute -inset-2 rounded-full border-2 border-dashed border-[#00ffff]/40"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 15,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    variants={{
                      hover: {
                        borderColor: "#00ffff",
                        scale: 1.1,
                      },
                    }}
                  />

                  {/* Clean Logo Container */}
                  <motion.div
                    className="relative w-full h-full bg-transparent rounded-full flex items-center justify-center border-2 border-[#00ffff]/50 overflow-hidden shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                    variants={{
                      hover: {
                        borderColor: "#00ffff",
                        scale: 1.05,
                        boxShadow: "0 0 30px rgba(0,255,255,0.6)",
                        transition: { duration: 0.5, ease: "easeInOut" },
                      },
                    }}
                  >
                    {/* Glow layer */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#00ffff]/5"
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Logo image */}
                    <motion.div
                      className="relative z-10 w-28 h-28 md:w-36 md:h-36"
                      variants={{
                        hover: {
                          scale: 1.1,
                          filter: "brightness(1.15)",
                        },
                      }}
                    >
                      <img
                        src="/logo.png"
                        alt="MUN IITI Logo"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Title */}
              <motion.div className="relative py-2 md:py-4">
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-8xl font-black relative leading-[1.15] pb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover="hover"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-[#00ffff] to-white bg-clip-text text-transparent"
                    variants={{
                      hover: {
                        x: [0, -2, 2, 0],
                        filter: [
                          "hue-rotate(0deg)",
                          "hue-rotate(90deg)",
                          "hue-rotate(0deg)",
                        ],
                        transition: { duration: 0.3, repeat: 2 },
                      },
                    }}
                  >
                    MUN IITI 10.0
                  </motion.span>
                  <span className="relative bg-gradient-to-r from-[#00ffff] via-white to-[#00ffff] bg-clip-text text-transparent">
                    MUN IITI 10.0
                  </span>
                </motion.h1>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00ffff] to-[#00ffff] opacity-20 blur-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="space-y-3"
              >
                <motion.h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white relative" whileHover="hover">
                  <motion.span className="inline-block">Where</motion.span>{" "}
                  <motion.span className="inline-block">Dialogue</motion.span>{" "}
                  <motion.span className="inline-block">Defines</motion.span>{" "}
                  <motion.span className="inline-block text-[#00ffff]">Destiny</motion.span>
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.6 }}
                >
                  Join us for three days of debate, diplomacy, and global leadership at IIT
                  Indore's premier Model United Nations conference organised by Academic Council  Students' Gymkhana , IIT Indore.
                </motion.p>
              </motion.div>

              {/* Register button — opens the in-page "coming soon" panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
              >
                <motion.button
                  onClick={() => setShowRegisterSoon(true)}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#00ffff] text-black px-8 py-3 rounded-full font-bold text-lg relative overflow-hidden group"
                  variants={{
                    hover: {
                      scale: 1.05,
                      boxShadow: "0 0 25px rgba(0,255,255,0.7)",
                    },
                  }}
                >
                  <span className="relative z-10">Register Now</span>
                </motion.button>
              </motion.div>

              {/* Date */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="pt-4"
              >
                <p className="text-base md:text-lg text-white/80">
                October 23 – 25,  2026   • IIT Indore, Madhya Pradesh
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      {!showRegisterSoon && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.2,
            filter: "drop-shadow(0 0 8px #00ffff)",
          }}
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChevronDown className="w-8 h-8 text-[#00ffff]/70 hover:text-[#00ffff] transition-colors duration-300" />
        </motion.div>
      )}
    </section>
  );
}