import React from "react";
import { motion } from "framer-motion";

// Images
import Project1 from "../assets/images/reactjs_miniproject1.png";
import Project2 from "../assets/images/miniproject2.png";
import Project3 from "../assets/images/miniproject3.png";
import Project4 from "../assets/images/miniproject4.png";
import Project5 from "../assets/images/miniproject5.png";
import Project6 from "../assets/images/miniproject6.png";
import Project7 from "../assets/images/miniproject7.png";
import Project8 from "../assets/images/miniproject8.png";
import Project9 from "../assets/images/miniproject9.png";

const miniProjects = [
  {
    title: "Mini Projects",
    desc: "Small mimiprojects app with product listing & cart functionality.",
    img: Project1,
    repo: "https://github.com/muthulakshmi558/Weeklytest",
    live: "https://weeklytest-plum.vercel.app/",
  },
  {
    title: "Personal Portfolio",
    desc: "Small mimiprojects app with product listing & cart functionality.",
    img: Project2,
    repo:   "https://github.com/muthulakshmi558/Personal-Portfolio-Website",
    live: "https://personal-portfolio-website-xi-henna.vercel.app/",
  },

    {
    title: "MiniProjects",
    desc: "Manage daily tasks with this interactive React app.",
    img: Project3,
    repo: "https://github.com/muthulakshmi558/Muthulakshmi-Projects5",
    live: "https://muthulakshmi-projects5.vercel.app/",
  },

  {
    title: "To Do List App",
    desc: "Manage daily tasks with this interactive React app.",
    img: Project4,
    repo: "https://github.com/muthulakshmi558/Muthulakshmi-Projects5",
    live: "https://to-do-list-app-new.vercel.app/",
  },
  {
    title: "To Do List App",
    desc: "Simple To do list app to showcase list.",
    img: Project5,
    repo: "https://github.com/muthulakshmi558/To-do-app",
    live: "https://to-do-app-eight-virid.vercel.app/",
  },

    {
    title: "Weather App",
    desc: "Simple To do list app to showcase list.",
    img: Project6,
    repo: "https://github.com/muthulakshmi558/Weather-App-new",
    live: "https://weather-app-new1.vercel.app/",
  },

    {
    title: "Expense Tracker App",
    desc: "Simple To do list app to showcase list.",
    img: Project7,
    repo: "https://github.com/muthulakshmi558/Expense-Tracker",
    live: "https://expense-tracker-new-eight.vercel.app/",
  },

      {
    title: "Music App",
    desc: "Simple To do list app to showcase list.",
    img: Project8,
    repo: "https://github.com/muthulakshmi558/Music-Player",
    live: "https://music-player-xi-sepia.vercel.app/",
  },

      {
    title: "Expense Tracker App",
    desc: "Simple To do list app to showcase list.",
    img: Project9,
    repo: "https://github.com/muthulakshmi558/Booking-System",
    live: "https://booking-system-three-roan.vercel.app/view",
  },
];

const MiniProjectsSection = () => {
  return (
<section className="py-20 px-6 relative overflow-hidden bg-[#1A1A2E]">
  {/* Animated Bubbles */}
  {Array.from({ length: 25 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute rounded-full bg-purple-500/20"
      style={{
        width: Math.random() * 12 + 4,
        height: Math.random() * 12 + 4,
        top: Math.random() * 800,
        left: Math.random() * 1200,
      }}
      animate={{
        y: ["0%", "20%", "0%"],
        x: ["0%", "10%", "0%"],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        repeat: Infinity,
        duration: 8 + Math.random() * 4,
        ease: "easeInOut",
        delay: Math.random(),
      }}
    />
  ))}

  <div className="max-w-6xl mx-auto relative z-10">
    <h2 className="text-4xl font-bold text-center text-white mb-16">
      Mini <span className="text-yellow-400">Projects</span>
    </h2>

    <div className="grid md:grid-cols-3 gap-10">
      {miniProjects.map((proj, idx) => (
        <motion.div
          key={idx}
          className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md shadow-lg flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: idx * 0.3 }}
          whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0], boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
        >
          {/* Image */}
          <div className="relative w-full h-56 overflow-hidden">
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-bold text-yellow-400">{proj.title}</h3>
              <p className="text-gray-200 text-sm mt-1">{proj.desc}</p>
            </div>
          </div>

          {/* Links */}
          <div className="p-4 flex justify-between mt-auto">
            <a
              href={proj.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 font-semibold text-sm"
            >
              Repo
            </a>
            <a
              href={proj.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 font-semibold text-sm"
            >
              Live
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
};

export default MiniProjectsSection;
