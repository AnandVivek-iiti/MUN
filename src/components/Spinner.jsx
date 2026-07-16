// components/Spinner.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const Spinner = () => {
  return (
    <div className="fixed inset-0 z-[150] flex flex-col items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
      {/* Glowing rotating ring */}
      <motion.div
        className="relative w-24 h-24 mb-8 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: [0.9, 1, 0.9],
          transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <motion.div
          className="absolute inset-0 border-4 border-t-[#00ffff] border-[#003b3b] rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Pulsating Glow */}
        <motion.div
          className="absolute w-full h-full rounded-full"
          style={{
            boxShadow: "0 0 20px 5px rgba(0, 255, 255, 0.3)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Text Animation */}
      <motion.div
        className="text-center text-[#00ffff]"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3, duration: 0.6 },
        }}
      >
        <motion.h1
          className="text-3xl font-extrabold tracking-widest"
          animate={{
            textShadow: [
              "0 0 8px #00ffff",
              "0 0 16px #00ffff",
              "0 0 8px #00ffff",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          MUN 9.0 IITI
        </motion.h1>

        <motion.p
          className="text-sm mt-2 opacity-80 font-medium"
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Crafting Diplomacy, One Debate at a Time.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Spinner;
