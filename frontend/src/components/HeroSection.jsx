import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import myImage from "../assets/images/profile.jpeg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const roles = ["Designer", "Developer", "Fullstack Developer", "React Enthusiast"];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [bubbles, setBubbles] = useState([]);

  // Typing effect
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < roles[roleIndex].length) {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [charIndex, roleIndex]);

  // Bubble animation
  useEffect(() => {
    const bubbleArray = [];
    for (let i = 0; i < 35; i++) {
      bubbleArray.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 6 + 2,
        vy: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }
    setBubbles(bubbleArray);

    const interval = setInterval(() => {
      setBubbles((prev) =>
        prev.map((b) => ({
          ...b,
          y: b.y - b.vy < 0 ? window.innerHeight : b.y - b.vy,
        }))
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen relative overflow-hidden bg-gradient-to-br from-[#2E0249] via-[#570A57] to-[#F806CC]">
      {/* Floating bubbles */}
      <div className="absolute inset-0 z-0">
        {bubbles.map((b) => (
          <motion.div
            key={b.id}
            className="absolute rounded-full bg-[#FFD60A]"
            style={{
              width: b.size,
              height: b.size,
              left: b.x,
              top: b.y,
              opacity: b.opacity,
            }}
            animate={{ y: [b.y, b.y - 10, b.y] }}
            transition={{ repeat: Infinity, duration: Math.random() * 4 + 3 }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 relative z-10 h-full justify-center">
        {/* Left text content */}
        <motion.div
          className="flex-1 text-white text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-3xl mb-2 text-[#FFD60A]">Hello, It's Me</h2>
          <h1 className="text-5xl font-bold mb-2">
            Muthu <span className="text-[#FF6EC7]">Lakshmi</span>
          </h1>
          <h3 className="text-2xl mb-6">
            And I'm a <span className="text-[#FFD60A]">{text}</span>
            <span className="blink">|</span>
          </h3>
          <p className="text-gray-200 max-w-md mb-6">
            Building apps with React, Django, Flask, REST APIs, SQL etc.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mb-6 justify-center md:justify-start text-[#FFD60A]">
            {[FaLinkedin, FaGithub, SiVercel].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.3 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 + idx * 0.3 }}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </div>

          {/* Download CV Button */}
          <motion.a
            href="../assets/files/MuthuLakshmi_CV.pdf" // PDF file should be in public folder
            download="Muthu_Lakshmi_Resume.pdf"
            className="bg-[#FF6EC7] text-white px-6 py-3 rounded-lg font-semibold shadow-lg inline-block"
            animate={{ scale: [1, 1.1, 1] }} // Continuous zoom in/out
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Right profile image */}
        <motion.div
          className="flex-1 flex justify-center relative mt-10 md:mt-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.img
            src={myImage}
            alt="Profile"
            className="w-64 h-64 object-cover rounded-full border-4 border-[#FFD60A] shadow-lg z-20"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </motion.div>
      </div>

      {/* Blinking cursor style */}
      <style>
        {`
          .blink {
            animation: blink 1s step-start infinite;
          }
          @keyframes blink {
            50% { opacity: 0; }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
