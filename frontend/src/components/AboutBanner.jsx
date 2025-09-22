import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AboutBanner = () => {
  const phrases = [
    "Python Fullstack Developer",
    "Django & REST API Specialist",
    "React Enthusiast"
  ];

  const [currentText, setCurrentText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    const typing = setInterval(() => {
      if (charIndex < phrases[phraseIndex].length) {
        setCurrentText((prev) => prev + phrases[phraseIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCurrentText("");
          setCharIndex(0);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 1500);
      }
    }, 100);
    return () => clearInterval(typing);
  }, [charIndex, phraseIndex]);

  // Background circles
  const [circles, setCircles] = useState([]);
  useEffect(() => {
    const temp = [];
    for (let i = 0; i < 30; i++) {
      temp.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 8 + 4,
        vy: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.4 + 0.2,
        color: ["#FFD60A", "#FF6EC7", "#00FFF7"][Math.floor(Math.random() * 3)],
      });
    }
    setCircles(temp);

    const interval = setInterval(() => {
      setCircles((prev) =>
        prev.map((c) => ({ ...c, y: c.y - c.vy < 0 ? window.innerHeight : c.y - c.vy }))
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  // Background diagonal lines
  const [lines, setLines] = useState([]);
  useEffect(() => {
    const temp = [];
    for (let i = 0; i < 20; i++) {
      temp.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        length: Math.random() * 200 + 50,
        speed: Math.random() * 0.5 + 0.1,
        color: ["#FFFFFF20", "#FFD60A20", "#FF6EC720"][Math.floor(Math.random() * 3)],
        angle: Math.random() * 360,
      });
    }
    setLines(temp);

    const interval = setInterval(() => {
      setLines((prev) =>
        prev.map((l) => ({
          ...l,
          x: l.x + Math.cos((l.angle * Math.PI) / 180) * l.speed,
          y: l.y + Math.sin((l.angle * Math.PI) / 180) * l.speed,
        }))
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen relative overflow-hidden bg-gradient-to-br from-[#2E0249] via-[#570A57] to-[#F806CC] flex items-center">
      {/* Background circles */}
      <div className="absolute inset-0 z-0">
        {circles.map((c) => (
          <motion.div
            key={c.id}
            className="absolute rounded-full"
            style={{
              width: c.size,
              height: c.size,
              left: c.x,
              top: c.y,
              backgroundColor: c.color,
              opacity: c.opacity,
            }}
            animate={{ y: [c.y, c.y - 10, c.y] }}
            transition={{ repeat: Infinity, duration: Math.random() * 4 + 3 }}
          />
        ))}
        {lines.map((l) => (
          <motion.div
            key={l.id}
            className="absolute"
            style={{
              width: l.length,
              height: 1,
              backgroundColor: l.color,
              left: l.x,
              top: l.y,
              rotate: l.angle,
            }}
            animate={{ x: [l.x, l.x + 10, l.x], y: [l.y, l.y + 10, l.y] }}
            transition={{ repeat: Infinity, duration: Math.random() * 6 + 4, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About <span className="text-yellow-400">Me</span>
        </motion.h1>

        <motion.p
          className="text-gray-200 text-lg md:text-xl mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          I am <span className="text-pink-400">Bolby Doe</span>, passionate about building
          scalable web applications with Python, Django, REST APIs, and React.
        </motion.p>

        <motion.h2
          className="text-3xl text-yellow-400 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          {currentText}
          <span className="blink">|</span>
        </motion.h2>

          <motion.a
            href="../assets/files/MuthuLakshmi_CV.pdf"  
            download="MuthuPandiyan-Resume.pdf"  
            className="mt-10 inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 
                      text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg"
            whileHover={{ scale: 1.1, rotateY: 10 }}
          >
            Download CV
          </motion.a>

        <style>
          {`
            .blink { animation: blink 1s step-start infinite; }
            @keyframes blink { 50% { opacity: 0; } }
          `}
        </style>
      </div>
    </section>
  );
};

export default AboutBanner;
