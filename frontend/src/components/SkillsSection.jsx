import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaDatabase, FaServer, FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from "react-icons/fa";
import { SiDjango, SiFlask, SiFastapi } from "react-icons/si";

const skillsData = [
  {
    rowTitle: "Backend",
    skills: [
      { icon: <FaPython size={36} className="text-purple-400" />, title: "Python", percent: 95 },
      { icon: <SiDjango size={36} className="text-green-500" />, title: "Django", percent: 90 },
      { icon: <SiFlask size={36} className="text-pink-400" />, title: "Flask", percent: 85 },
      { icon: <SiFastapi size={36} className="text-yellow-400" />, title: "REST API", percent: 80 },
    ],
  },
  {
    rowTitle: "Frontend",
    skills: [
      { icon: <FaReact size={36} className="text-cyan-400" />, title: "React JS", percent: 90 },
      { icon: <FaHtml5 size={36} className="text-orange-500" />, title: "HTML", percent: 95 },
      { icon: <FaCss3Alt size={36} className="text-blue-500" />, title: "CSS", percent: 90 },
      { icon: <FaJs size={36} className="text-yellow-300" />, title: "JavaScript", percent: 85 },
      { icon: <FaBootstrap size={36} className="text-purple-600" />, title: "Bootstrap", percent: 85 },
    ],
  },
  {
    rowTitle: "Database & Tools",
    skills: [
      { icon: <FaDatabase size={36} className="text-green-400" />, title: "SQL / DB", percent: 90 },
      { icon: <FaServer size={36} className="text-gray-400" />, title: "Server Management", percent: 80 },
    ],
  },
];

// Floating icons for background
const floatingIcons = [
  <FaPython key="py" size={36} className="text-purple-500 opacity-30" />,
  <SiDjango key="dj" size={36} className="text-green-400 opacity-30" />,
  <FaReact key="react" size={36} className="text-cyan-400 opacity-30" />,
  <SiFlask key="flask" size={36} className="text-pink-400 opacity-30" />,
  <SiFastapi key="api" size={36} className="text-yellow-400 opacity-30" />,
];

const SkillsPage = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-[#1A1A2E]">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-purple-800 via-pink-600 to-yellow-400 opacity-10 animate-[gradientShift_25s_linear_infinite]"></div>

        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              top: Math.random() * 800,
              left: Math.random() * 1400,
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

        {/* Floating squares for parallax */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`square-${i}`}
            className="absolute bg-white/10 rounded-md"
            style={{
              width: Math.random() * 12 + 8,
              height: Math.random() * 12 + 8,
              top: Math.random() * 800,
              left: Math.random() * 1400,
            }}
            animate={{
              y: [0, 15, 0],
              x: [0, 10, 0],
              rotate: [0, 15, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + Math.random() * 4,
              ease: "easeInOut",
              delay: Math.random(),
            }}
          />
        ))}

{/* Floating skill icons */}
{floatingIcons.map((icon, idx) => (
  <motion.div
    key={idx}
    className="absolute cursor-pointer"
    style={{
      top: Math.random() * 800,
      left: Math.random() * 1400,
    }}
    animate={{
      y: ["0%", "15%", "0%"],
      x: ["0%", "15%", "0%"],
      rotate: [0, 30, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: 12 + Math.random() * 8,
      ease: "easeInOut",
      delay: Math.random(),
    }}
    whileHover={{
      scale: 1.3,
      boxShadow: "0 0 20px rgba(255,255,255,0.6)",
      rotate: [0, -10, 10, 0],
      transition: { duration: 0.5, ease: "easeOut" },
    }}
  >
    {icon}
  </motion.div>
))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          My <span className="text-yellow-400">Skills</span>
        </motion.h2>

        {skillsData.map((row, rowIdx) => (
          <div key={rowIdx} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: rowIdx * 0.3 }}
              className="text-xl text-white font-semibold mb-6 text-center"
            >
              {row.rowTitle}
            </motion.h3>

            <div className="grid md:grid-cols-4 gap-8">
              {row.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="relative bg-gray-800/30 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-700 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.2 + rowIdx * 0.3 }}
                >
                  <div className="mb-4">{skill.icon}</div>
                  <h4 className="text-white font-semibold text-lg mb-2">{skill.title}</h4>
                  <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-2 rounded-full bg-yellow-400`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                  <span className="text-sm text-gray-300 mt-1">{skill.percent}%</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-[gradientShift_25s_linear_infinite] {
            background-size: 400% 400%;
            animation: gradientShift 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default SkillsPage;
