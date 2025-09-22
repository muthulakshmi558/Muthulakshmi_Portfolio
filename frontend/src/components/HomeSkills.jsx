import React, { useEffect, useState } from "react";
import { FaPython, FaDatabase, FaReact, FaServer, FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from "react-icons/fa";
import { SiDjango, SiFlask, SiFastapi } from "react-icons/si";
import { motion } from "framer-motion";

const HomeSkills = () => {
  const [particles, setParticles] = useState([]);

  const skills = [
    { icon: <FaPython size={28} className="text-purple-400" />, name: "Python", percent: 95 },
    { icon: <SiDjango size={28} className="text-green-500" />, name: "Django", percent: 90 },
    { icon: <SiFlask size={28} className="text-gray-400" />, name: "Flask", percent: 85 },
    { icon: <FaReact size={28} className="text-blue-400" />, name: "React", percent: 90 },
    { icon: <FaDatabase size={28} className="text-yellow-400" />, name: "SQL & DB", percent: 80 },
    { icon: <SiFastapi size={28} className="text-pink-400" />, name: "REST API", percent: 85 },
    { icon: <FaServer size={28} className="text-purple-500" />, name: "Backend Server", percent: 90 },
    { icon: <FaHtml5 size={28} className="text-orange-500" />, name: "HTML", percent: 95 },
    { icon: <FaCss3Alt size={28} className="text-blue-600" />, name: "CSS", percent: 90 },
    { icon: <FaJs size={28} className="text-yellow-400" />, name: "JavaScript", percent: 85 },
    { icon: <FaBootstrap size={28} className="text-purple-500" />, name: "Bootstrap", percent: 80 },
  ];

  // Floating particles
  useEffect(() => {
    const particleArray = [];
    for (let i = 0; i < 40; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * 600,
        size: Math.random() * 6 + 2,
        color: ["#9F7AEA", "#F687B3", "#F6E05E"][Math.floor(Math.random() * 3)],
        vy: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    setParticles(particleArray);

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          y: p.y - p.vy < 0 ? 600 : p.y - p.vy,
        }))
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#1A1A2E] py-16 px-6 relative overflow-hidden">
      {/* Faint diagonal grid lines */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <defs>
          <pattern id="diagonalLines" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0,40 L40,0" stroke="#4C51BF" strokeWidth="0.5" opacity="0.1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalLines)">
          <animateTransform 
            attributeName="transform" 
            type="translate" 
            from="0 0" 
            to="40 40" 
            dur="20s" 
            repeatCount="indefinite" 
          />
        </rect>
      </svg>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: p.x,
              top: p.y,
              backgroundColor: p.color,
              opacity: p.opacity,
            }}
            animate={{ y: [p.y, p.y - 10, p.y], opacity: [p.opacity, p.opacity + 0.2, p.opacity] }}
            transition={{ repeat: Infinity, duration: 4 + Math.random() * 2, ease: "easeInOut" }}
          />
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center text-white mb-10 relative z-10">My Skills</h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center relative z-10">
        {skills.map((skill, idx) => {
          const delay = Math.random() * 0.5 + idx * 0.1;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotate: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay, type: "spring", stiffness: 120 }}
              whileHover={{
                scale: 1.1,
                rotate: [-3, 3, -3],
                boxShadow: "0 0 25px rgba(255,255,255,0.6), 0 0 45px rgba(156,163,175,0.4)",
                transition: { duration: 0.5 },
              }}
              className="bg-[#2E2E48] w-40 h-40 rounded-xl shadow-lg border border-gray-700 flex flex-col items-center justify-center p-4 relative"
            >
              {/* Neon Glow Outline */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute inset-0 rounded-xl border border-[#FFD60A] pointer-events-none"
                animate={{ boxShadow: "0 0 20px #FFD60A, 0 0 40px #FFD60A55, 0 0 60px #FFD60A33" }}
                transition={{ repeat: Infinity, repeatType: "mirror", duration: 2 + Math.random() * 1.5 }}
              />

              <div className="mb-3 relative z-10">{skill.icon}</div>
              <h3 className="text-white font-semibold mb-2 text-center relative z-10">{skill.name}</h3>
              <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden mt-2 relative z-10">
                <motion.div
                  className={`h-2 rounded-full ${
                    skill.name === "Python"
                      ? "bg-purple-500"
                      : skill.name === "Django"
                      ? "bg-green-500"
                      : skill.name === "Flask"
                      ? "bg-gray-400"
                      : skill.name === "React"
                      ? "bg-blue-400"
                      : skill.name === "SQL & DB"
                      ? "bg-yellow-400"
                      : skill.name === "REST API"
                      ? "bg-pink-400"
                      : skill.name === "Backend Server"
                      ? "bg-purple-500"
                      : skill.name === "HTML"
                      ? "bg-orange-500"
                      : skill.name === "CSS"
                      ? "bg-blue-600"
                      : skill.name === "JavaScript"
                      ? "bg-yellow-400"
                      : "bg-purple-500"
                  }`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay }}
                />
              </div>
              <span className="block text-sm text-gray-300 mt-1 relative z-10">{skill.percent}%</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeSkills;
