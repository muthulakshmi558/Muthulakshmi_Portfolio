import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const HomeContact = () => {
  const [particles, setParticles] = useState([]);

  const contactInfo = [
    {
      icon: <FaPhoneAlt size={28} className="text-purple-400" />,
      title: "Phone",
      detail: "+91 8754322577",
      color: "purple",
    },
    {
      icon: <FaEnvelope size={28} className="text-pink-400" />,
      title: "Email",
      detail: "muthulakshmi5293@gmail.com",
      color: "pink",
    },
    {
      icon: <FaMapMarkerAlt size={28} className="text-yellow-400" />,
      title: "Location",
      detail: "Chennai",
      color: "yellow",
    },
  ];

  // Generate floating particles
  useEffect(() => {
    const particleArray = [];
    for (let i = 0; i < 40; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * 600,
        size: Math.random() * 4 + 2,
        color: ["#9F7AEA", "#F687B3", "#F6E05E"][Math.floor(Math.random() * 3)],
        vy: Math.random() * 0.3 + 0.1,
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
    <section className="bg-[#1A1A2E] py-24 px-6 relative overflow-hidden">
      {/* Animated Particles */}
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
              opacity: 0.5,
            }}
            animate={{ y: [p.y, p.y - 10, p.y] }}
            transition={{ repeat: Infinity, duration: Math.random() * 4 + 3 }}
          />
        ))}
      </div>

      {/* Animated Lines Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(8)].map((_, idx) => (
          <motion.div
            key={idx}
            className="absolute w-[2px] h-full bg-gray-700 opacity-20"
            style={{ left: `${idx * 12.5}%` }}
            animate={{ y: ["0%", "100%"] }}
            transition={{
              duration: 6 + idx,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        ))}
        {[...Array(5)].map((_, idx) => (
          <motion.div
            key={idx + 10}
            className="absolute h-[2px] w-full bg-gray-700 opacity-20"
            style={{ top: `${idx * 20}%` }}
            animate={{ x: ["0%", "100%"] }}
            transition={{
              duration: 8 + idx,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-white">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Contact <span className="text-yellow-400">Me</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {contactInfo.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, rotate: -5, opacity: 0 }}
              whileInView={{ y: 0, rotate: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
                delay: idx * 0.2,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                boxShadow: `0 0 40px ${
                  item.color === "purple"
                    ? "#9F7AEA"
                    : item.color === "pink"
                    ? "#F687B3"
                    : "#F6E05E"
                }`,
              }}
              className={`relative border-2 border-${item.color}-400 rounded-3xl px-10 py-8 text-center cursor-pointer transition-all duration-500 bg-[#1A1A2E]/30 backdrop-blur-sm`}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.detail}</p>

              {/* Glowing animated outline */}
              <motion.div
                className={`absolute inset-0 rounded-3xl border-2 border-${item.color}-400 pointer-events-none`}
                initial={{ scale: 0.95, opacity: 0.2 }}
                animate={{ scale: [0.95, 1.05], opacity: [0.2, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 max-w-md mx-auto text-lg">
            For detailed inquiries, please use the full contact form on the dedicated contact page.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeContact;
