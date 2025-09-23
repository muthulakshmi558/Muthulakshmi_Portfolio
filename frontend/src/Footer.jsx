import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiVercel, SiRender } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#2E0249]/90 via-[#570A57]/80 to-[#F806CC]/80 text-white py-16 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-4">About Me</h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            I am a Python Fullstack Developer specializing in React, Django, REST APIs, and modern web technologies. I build responsive and interactive web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Quick Links</h3>
          <ul className="text-gray-200 space-y-2">
            <li className="hover:text-purple-400 transition-colors cursor-pointer">Home</li>
            <li className="hover:text-purple-400 transition-colors cursor-pointer">About</li>
            <li className="hover:text-purple-400 transition-colors cursor-pointer">Skills</li>
            <li className="hover:text-purple-400 transition-colors cursor-pointer">Projects</li>
            <li className="hover:text-purple-400 transition-colors cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Contact</h3>
          <p className="text-gray-200 text-sm mb-2">Email: muthulakshmi5293@gmail.com</p>
          <p className="text-gray-200 text-sm mb-2">Phone: +91 875 432 2577</p>
          <p className="text-gray-200 text-sm">Location: Chennai</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Follow Me</h3>
          <div className="flex gap-4 text-2xl text-[#FFD60A]">
            <motion.a
              href="https://github.com/muthulakshmi558"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, color: "#FF6EC7" }}
              transition={{ duration: 0.3 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://vercel.com/muthulakshmis-projects-57e18e42"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, color: "#FF6EC7" }}
              transition={{ duration: 0.3 }}
            >
              <SiVercel />
            </motion.a>

            {/* <motion.a
              href="https://dashboard.render.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, color: "#FF6EC7" }}
              transition={{ duration: 0.3 }}
            >
              <SiRender />
            </motion.a> */}

            <motion.a
              href="https://www.linkedin.com/in/muthu-lakshmi-497400364/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, color: "#FF6EC7" }}
              transition={{ duration: 0.3 }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Muthu Lakshmi. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
