import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaDatabase, FaServer } from "react-icons/fa";
import { SiDjango, SiFastapi } from "react-icons/si";

const skills = [
  {
    icon: <FaPython size={36} className="text-yellow-400" />,
    title: "Python",
    desc: "Core programming language for backend, scripting, and automation.",
    percent: 95,
    color: "yellow-400",
  },
  {
    icon: <SiDjango size={36} className="text-green-400" />,
    title: "Django",
    desc: "Fullstack framework to build scalable web applications efficiently.",
    percent: 90,
    color: "green-400",
  },
  {
    icon: <SiFastapi size={36} className="text-pink-400" />,
    title: "REST API",
    desc: "Design and build fast, secure, and scalable APIs.",
    percent: 85,
    color: "pink-400",
  },
];

const stats = [
  { number: "1000+", label: "Mini Projects Done" },
  { number: "15+", label: "Main Projects" },
  { number: "10+", label: "Satisfied Clients" },
  { number: "2", label: "Awards Winner" },
];

const HomeAbout = () => {
  return (
    <section className="relative overflow-hidden bg-[#1A1A2E] py-16 px-6">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-purple-800 via-pink-600 to-yellow-400 opacity-10 animate-[gradientShift_20s_linear_infinite]"></div>
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
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          About <span className="text-yellow-400">Me</span>
        </motion.h2>

        {/* Skills */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.5 }}
              className={`relative p-6 rounded-2xl shadow-lg flex flex-col items-center text-center border-2 border-opacity-20`}
              style={{
                borderColor: `rgba(255, 255, 255, 0.1)`,
                backgroundColor:
                  skill.color === "yellow-400"
                    ? "rgba(255, 214, 0, 0.1)"
                    : skill.color === "green-400"
                    ? "rgba(52, 211, 153, 0.1)"
                    : "rgba(236, 72, 153, 0.1)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0px 10px 30px rgba(255,255,255,0.3)`,
                transition: { duration: 0.5 },
              }}
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-white font-semibold text-xl mb-2">{skill.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{skill.desc}</p>
              <div className="w-full h-2 rounded-full overflow-hidden bg-gray-800">
                <motion.div
                  className={`h-2 rounded-full bg-${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: idx * 0.3 }}
                />
              </div>
              <span className={`block mt-1 text-sm text-${skill.color}`}>{skill.percent}%</span>
            </motion.div>
          ))}
        </div>

          {/* Download CV Button */}
          <motion.div className="flex justify-center mt-10" whileHover={{ scale: 1.1 }}>
            <a
              href="/resume.pdf"   // 📌 static/public folder la resume.pdf save pannunga
              download="MuthuPandiyan-Resume.pdf"
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 
                        text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg 
                        hover:opacity-90 transition duration-300"
            >
              Download CV
            </a>
          </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-300"
        >
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              className={`p-6 rounded-xl shadow-md hover:shadow-xl border-2`}
              style={{
                borderColor:
                  idx % 2 === 0
                    ? "rgba(255, 214, 0, 0.3)"
                    : idx % 3 === 0
                    ? "rgba(236, 72, 153, 0.3)"
                    : "rgba(139, 92, 246, 0.3)",
                backgroundColor:
                  idx % 2 === 0
                    ? "rgba(255, 214, 0, 0.05)"
                    : idx % 3 === 0
                    ? "rgba(236, 72, 153, 0.05)"
                    : "rgba(139, 92, 246, 0.05)",
              }}
            >
              <h3 className="text-3xl font-bold text-yellow-400 mb-2">{item.number}</h3>
              <p className="text-sm">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

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

export default HomeAbout;
