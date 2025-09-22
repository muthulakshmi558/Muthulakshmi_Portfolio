import React from "react";
import { motion } from "framer-motion";

const AboutCTA = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-[#1A1A2E]">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Floating Particles */}
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              top: Math.random() * 600,
              left: Math.random() * 1200,
            }}
            animate={{
              y: ["0%", "-20%", "0%"],
              x: ["0%", "10%", "0%"],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + Math.random() * 4,
              ease: "easeInOut",
              delay: Math.random(),
            }}
          />
        ))}

        {/* Light Waves */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-600 to-yellow-400 opacity-10 blur-3xl animate-[wave_15s_linear_infinite]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Let's Work <span className="text-yellow-400">Together</span>
        </h2>
        <p className="text-gray-300 mb-12 text-lg">
          Interested in collaborating or just want to say hi? Feel free to reach out!
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {/* ✅ Download CV Button */}
          <motion.a
            href="/resume.pdf"   
            download="MuthuPandiyan-Resume.pdf"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255,255,255,0.6)" }}
            className="px-8 py-4 rounded-full font-semibold text-gray-900 
                       bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 
                       shadow-lg transition duration-300"
          >
            Download CV
          </motion.a>

          {/* ✅ Contact Me Button */}
          <motion.a
            href="/contact" 
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255,255,255,0.6)" }}
            className="px-8 py-4 rounded-full font-semibold text-gray-900 
                       bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 
                       shadow-lg transition duration-300"
          >
            Contact Me
          </motion.a>
        </div>
      </div>

      <style>
        {`
          @keyframes wave {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-[wave_15s_linear_infinite] {
            background-size: 400% 400%;
            animation: wave 15s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default AboutCTA;
