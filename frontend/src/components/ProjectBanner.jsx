import React from "react";
import { motion } from "framer-motion";

const ProjectBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#1A1A2E] py-32 px-6">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-purple-800 via-pink-600 to-yellow-400 opacity-10 animate-gradientShift"></div>
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 10 + 4,
              height: Math.random() * 10 + 4,
              top: Math.random() * 800,
              left: Math.random() * 1400,
            }}
            animate={{
              y: ["0%", "-15%", "0%"],
              x: ["0%", "15%", "0%"],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + Math.random() * 6,
              ease: "easeInOut",
              delay: Math.random(),
            }}
          />
        ))}
      </div>

      {/* Banner Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-white mb-4"
        >
          My <span className="text-yellow-400">Projects</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-300 text-lg md:text-xl"
        >
          Check out some of my work in fullstack development & design.
        </motion.p>
      </div>

      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradientShift {
            background-size: 400% 400%;
            animation: gradientShift 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default ProjectBanner;
