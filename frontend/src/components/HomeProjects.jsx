import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPython, FaReact, FaDatabase } from "react-icons/fa";
import { SiDjango, SiFastapi } from "react-icons/si";

// Images
import Ecommerce from "../assets/images/ecommerce.png";
import RestAPI from "../assets/images/ecommerce.png";
import Portfolio from "../assets/images/ecommerce.png";

const projects = [
  {
    title: "E-commerce Platform",
    desc: "Fullstack e-commerce website with Django backend & React frontend.",
    img: Ecommerce,
    tech: [<FaPython key="1" />, <SiDjango key="2" />, <FaReact key="3" />, <FaDatabase key="4" />],
  },
  {
    title: "REST API Service",
    desc: "FastAPI-based REST API for managing user authentication & data.",
    img: RestAPI,
    tech: [<FaPython key="1" />, <SiFastapi key="2" />, <FaDatabase key="3" />],
  },
  {
    title: "Portfolio Website",
    desc: "Interactive portfolio built with React, Tailwind, Framer Motion animations.",
    img: Portfolio,
    tech: [<FaReact key="1" />, <FaPython key="2" />],
  },
];

const HomeProjects = () => {
  return (
    <section className="bg-[#1A1A2E] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center font-bold text-white mb-16">
          My <span className="text-yellow-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="bg-[#2E2E48] rounded-2xl shadow-xl overflow-hidden flex flex-col"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            >
              {/* Project Image */}
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-64 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">{proj.title}</h3>
                  <p className="text-gray-300 mb-4">{proj.desc}</p>
                  <div className="flex gap-2 text-xl">{proj.tech.map((icon) => icon)}</div>
                </div>

                {/* See More Button */}
                <motion.button
                  className="mt-6 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 shadow-lg hover:opacity-90 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  See More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
