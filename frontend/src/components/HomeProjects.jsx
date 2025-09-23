import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaReact, FaDatabase } from "react-icons/fa";
import { SiDjango, SiFastapi } from "react-icons/si";

// Images
import Ecommerce from "../assets/images/mainproject5.png";
import RestAPI from "../assets/images/miniproject2.png";

const projects = [
  {
    type: "Main Project",
    title: "E-commerce Platform",
    desc: "Fullstack e-commerce website with Django backend & React frontend.",
    img: Ecommerce,
    tech: [<FaPython key="1" />, <SiDjango key="2" />, <FaReact key="3" />, <FaDatabase key="4" />],
  },
  {
    type: "Mini Project",
    title: "Portfolio Website",
    desc: "Interactive portfolio built with React, Tailwind, Framer Motion animations.",
    img: RestAPI,
    tech: [<FaReact key="1" />, <FaPython key="2" />],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const HomeProjects = () => {
  return (
    <section className="bg-[#1A1A2E] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center font-bold text-white mb-16">
          My <span className="text-yellow-400">Projects</span>
        </h2>

        {/* Single Row Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="relative bg-[#2E2E48] rounded-2xl shadow-xl overflow-hidden flex flex-col cursor-pointer"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              {/* Project Image */}
              <img src={proj.img} alt={proj.title} className="w-full h-64 object-cover" />

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-sm font-semibold text-purple-400 mb-1">{proj.type}</span>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{proj.title}</h3>
                <div className="flex gap-2 text-xl">{proj.tech.map((icon) => icon)}</div>
              </motion.div>

              {/* Content below image */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-gray-300 mb-4">{proj.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <motion.div className="flex justify-center mt-10" whileHover={{ scale: 1.05 }}>
          <a
            href="/projects"
            className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 shadow-lg hover:opacity-90 transition duration-300"
          >
            See More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeProjects;
