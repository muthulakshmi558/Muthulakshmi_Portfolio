import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaBullhorn, FaUserTie, FaLaptopCode, FaPencilRuler } from "react-icons/fa";

const milestones = [
  { date: "2015 Oct", role: "SEO Analyst", icon: <FaSearch />, desc: "Started career in digital marketing." },
  { date: "2018 Apr", role: "SEO Specialist", icon: <FaBullhorn />, desc: "Handled multiple client campaigns." },
  { date: "2019 May", role: "Digital Marketer", icon: <FaUserTie />, desc: "Expanded to overall digital strategies." },
  { date: "2020 Jun", role: "Senior Digital Marketer", icon: <FaUserTie />, desc: "Led projects & teams." },
  { date: "2025 Feb", role: "UX/UI Designer", icon: <FaPencilRuler />, desc: "Started designing user interfaces." },
  { date: "2025 Sep", role: "Fullstack Developer", icon: <FaLaptopCode />, desc: "Started career in fullstack development." },
];

const AboutTimeline = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-[#1A1A2E]">
      {/* Background Particles & Waves */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              top: Math.random() * 900,
              left: Math.random() * 1400,
            }}
            animate={{
              y: ["0%", "15%", "0%"],
              x: ["0%", "10%", "0%"],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + Math.random() * 5,
              ease: "easeInOut",
              delay: Math.random(),
            }}
          />
        ))}

        {/* Light wave */}
        <motion.div
          className="absolute w-full h-40 bg-gradient-to-r from-purple-700/20 via-pink-500/20 to-yellow-400/20 top-1/3 opacity-40 blur-3xl"
          animate={{ x: ["-30%", "30%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl text-center font-bold text-white mb-16">
          My <span className="text-yellow-400">Journey</span>
        </h2>

        <div className="relative">
          {/* Center timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/10 rounded-full shadow-lg"></div>

          {milestones.map((milestone, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.3 }}
                className={`mb-16 flex w-full ${isLeft ? "justify-start" : "justify-end"}`}
              >
                <div className="w-1/2 relative">
                  {/* Animated connector line from timeline to box */}
                  <motion.div
                    className="absolute top-0 h-full w-1 bg-gradient-to-b from-purple-400 via-pink-500 to-yellow-400 rounded-full"
                    style={{
                      left: isLeft ? "100%" : "-4px",
                      transform: isLeft ? "translateX(0%)" : "translateX(0%)",
                    }}
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1.2, delay: idx * 0.3 }}
                  />

                  {/* Content box */}
                  <motion.div
                    className={`relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 group ${
                      isLeft ? "ml-auto text-left" : "mr-auto text-right"
                    }`}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40, rotate: isLeft ? -1 : 1 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    whileHover={{
                      scale: 1.03,
                      y: [-2, 2, -2],
                      transition: { repeat: Infinity, duration: 3 },
                      boxShadow: "0 10px 20px rgba(255,255,255,0.2)",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                  >
                    {/* Icon inside box with pulsing glow */}
                    <motion.div
                      className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 rounded-full shadow-lg"
                      style={{ background: "linear-gradient(90deg, #A855F7, #EC4899, #FACC15)" }}
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: idx * 0.2 }}
                    >
                      {milestone.icon}
                    </motion.div>

                    <span className="text-yellow-400 font-semibold">{milestone.date}</span>
                    <h3 className="text-xl font-bold text-white mt-2">{milestone.role}</h3>
                    <p className="text-gray-300 mt-1">{milestone.desc}</p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
