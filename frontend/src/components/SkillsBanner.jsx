import React from "react";
import { motion } from "framer-motion";

const SkillsBanner = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/30"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              top: Math.random() * 600,
              left: Math.random() * 1200,
            }}
            animate={{
              y: ["0%", "-25%", "0%"],
              x: ["0%", "15%", "0%"],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + Math.random() * 5,
              ease: "easeInOut",
              delay: Math.random(),
            }}
          />
        ))}

        {/* Floating parallax shapes */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: Math.random() * 40 + 20,
              height: Math.random() * 40 + 20,
              top: Math.random() * 500,
              left: Math.random() * 1100,
            }}
            animate={{
              y: ["0%", "30%", "0%"],
              x: ["0%", "-20%", "0%"],
              rotate: [0, 180, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 12 + Math.random() * 8,
              ease: "easeInOut",
              delay: Math.random(),
            }}
          />
        ))}

        {/* Animated light streaks */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-white/40 via-yellow-300/40 to-pink-300/40 blur-xl"
            style={{
              width: Math.random() * 300 + 200,
              height: 2,
              top: Math.random() * 600,
              left: Math.random() * 1200,
            }}
            animate={{
              x: ["-100%", "120%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 20 + Math.random() * 10,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          My <span className="text-[#1A1A2E]">Skills</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-[#1A1A2E] text-lg md:text-xl"
        >
          Fullstack development expertise in Python, Django, REST APIs, React, and more.
        </motion.p>
      </div>
    </section>
  );
};

export default SkillsBanner;
