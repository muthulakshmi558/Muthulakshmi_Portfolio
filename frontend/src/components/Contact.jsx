import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactBanner = () => {
  const icons = [
    <FaPhoneAlt key="1" />,
    <FaEnvelope key="2" />,
    <FaMapMarkerAlt key="3" />,
  ];

  return (
    <section className="relative overflow-hidden py-24 px-6 bg-[#1A1A2E]">
      {/* Background Animations */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay */}
        <div className="w-full h-full bg-gradient-to-r from-purple-800 via-pink-600 to-yellow-400 opacity-10 animate-[gradientShift_20s_linear_infinite]"></div>

        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
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
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + Math.random() * 4,
              ease: "easeInOut",
              delay: Math.random(),
            }}
          />
        ))}

        {/* Animated Contact Icons */}
        {icons.map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-white text-3xl opacity-20"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              y: ["0%", "10%", "0%"],
              x: ["0%", "-10%", "0%"],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + i * 2,
              ease: "easeInOut",
              delay: i,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Banner Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-white mb-6"
        >
          Get in <span className="text-yellow-400">Touch</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-gray-300 text-lg"
        >
          Have a question or want to work together? Reach out via any of the methods below.
        </motion.p>
      </div>

      {/* Extra CSS animation for gradient */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-[gradientShift_20s_linear_infinite] {
            background-size: 400% 400%;
            animation: gradientShift 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default ContactBanner;
