"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const PageHeader = ({ title, subtitle }) => {
  const titleRef = useRef(null);
  const particlesRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    const titleElement = titleRef.current;
    const particles = particlesRef.current;

    if (titleElement) {
      const originalText = titleElement.textContent;
      const letters = originalText.split("");
      titleElement.innerHTML = letters
        .map((letter) =>
          letter === " "
            ? " "
            : `<span class="inline-block" style="background: linear-gradient(90deg, #00ffff 0%, #ffffff 50%, #00ffff 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent;">${letter}</span>`
        )
        .join("");

      const spans = titleElement.querySelectorAll("span");
      gsap.fromTo(
        spans,
        { y: 100, opacity: 0, rotationX: -90 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: gsap.parseEase("back.out(1.7)"),
        }
      );
    }

    if (particles) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div");
        particle.className =
          "absolute w-1 h-1 bg-[#00ffff] rounded-full opacity-30";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particles.appendChild(particle);

        gsap.to(particle, {
          y: -100,
          x: Math.random() * 200 - 100,
          opacity: 0,
          duration: Math.random() * 3 + 2,
          repeat: -1,
          ease: "none",
        });
      }
    }
  }, [title]);

  return (
    <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Reactive background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #00ffff 0%, transparent 60%)`,
        }}
      />

      {/* Grid background */}
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

      {/* Decorative animated shapes */}
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

      {/* Main content */}
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 md:mt-12"
        >
          {/* MUN IITI Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              type: "spring",
              stiffness: 120,
            }}
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
              {/* Outer ring animation */}
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

              {/* Logo container */}
              <motion.div
                className="relative w-full h-full bg-gradient-to-br from-[#00ffff]/10 to-black/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-[#00ffff]/50 overflow-hidden"
                variants={{
                  hover: {
                    borderRadius: ["50%", "25%", "50%"],
                    borderColor: "#00ffff",
                    backgroundColor: "rgba(0,255,255,0.15)",
                    transition: { duration: 0.8, ease: "easeInOut" },
                  },
                }}
              >
                {/* Actual logo */}
                <motion.div
                  className="relative z-10 w-28 h-28 md:w-36 md:h-36"
                  variants={{
                    hover: {
                      scale: 1.1,
                      filter: "brightness(1.3)",
                    },
                  }}
                >
                  <img
                    src="/logo.png"
                    alt="MUN IITI Logo"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.div className="relative">
            <motion.h1
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-8xl font-black relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <span className="relative bg-gradient-to-r from-[#00ffff] via-white to-[#00ffff] bg-clip-text text-transparent">
                {title}
              </span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="space-y-3"
          >
            <motion.h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white relative">
              {subtitle.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  whileHover={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
