import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaDatabase } from "react-icons/fa";
import { SiDjango, SiFastapi } from "react-icons/si";

// Project Images
import Project1 from "../assets/images/mainproject1.png";
import Project2 from "../assets/images/mainproject2.png";
import Project3 from "../assets/images/mainproject3.png";
import Project4 from "../assets/images/mainproject4.png";
import Project5 from "../assets/images/mainproject5.png";
import Project6 from "../assets/images/mainproject6.png";
import Project7 from "../assets/images/mainproject7.png";
import Project8 from "../assets/images/mainproject8.png";
import Project9 from "../assets/images/mainproject9.png";
import Project10 from "../assets/images/mainproject10.png";
import Project11 from "../assets/images/mainproject11.png";
import Project12 from "../assets/images/mainproject12.png";
import Project13 from "../assets/images/mainproject13.png";
import Project14 from "../assets/images/mainproject14.png";

const projectsData = {
  python: [
    {
      title: "Second Hand Bike",
      desc: "Small e-commerce app with product listing & cart functionality.",
      img: Project1,
      tech: [<FaPython key="1" />, <SiDjango key="2" />, <SiFastapi key="3" />, <FaDatabase key="4" />],
      repo: "https://github.com/muthulakshmi558/Drive-RP/tree/main/frontend",
      live: "https://drive-rp.vercel.app/",
    },
    {
      title: "REST API Service",
      desc: "FastAPI based API with authentication and CRUD operations.",
      img: Project2,
      tech: [<FaPython key="1" />, <SiFastapi key="2" />, <FaDatabase key="3" />],
      repo: "https://github.com/muthulakshmi558/StepUp-Shoe-Website/",
      live: "https://step-up-shoe-website.vercel.app/",
    },
  ],
  react: [
    {
      title: "Employee Dashbaord",
      desc: "Simple Employee Dashboard website built with React & CSS",
      img: Project3,
      tech: [<FaReact key="1" />],
      repo: "https://github.com/muthulakshmi558/Employeedashboard",
      live: "https://employeedashboard-eosin.vercel.app/",
    },
     {
      title: "Vetri Super Market",
      desc: "Vetri Super Market website built with React & CSS.",
      img: Project4,
      tech: [<FaReact key="1" />],
      repo: "https://github.com/muthulakshmi558/Vetri-Supermarket-Billing-Layout",
      live: "https://vetri-supermarket-billing-layout-x6.vercel.app/",
    },
     {
      title: "Online Cooking Class",
      desc: "Online Cooking Class built with React & CSS",
      img: Project5,
      tech: [<FaReact key="1" />],
      repo: "https://github.com/muthulakshmi558/Online-Cooking-Class-New",
      live: "https://cooking-online-class.vercel.app/",
    },
     {
      title: "Vetri Exam Portal",
      desc: "Vetri Exam Portal built with React & CSS.",
      img: Project6,
      tech: [<FaReact key="1" />],
      repo: "https://github.com/muthulakshmi558/Vetri-Exam-Portal",
      live: "https://vetri-exam-portal.vercel.app/",
    },
     {
      title: "Zahirx Website",
      desc: "Zahirx website built with React & Tailwind.",
      img: Project7,
      tech: [<FaReact key="1" />],
      repo: "https://github.com/muthulakshmi558/ZAHIRX-WEBSITE",
      live: "https://zahirx-website.vercel.app/",
    },
     {
      title: "Earth Bubs Baby Products",
      desc: "Earth bubs baby product website built with React & Tailwind.",
      img: Project8,
      tech: [<FaReact key="1" />],
      repo: "https://github.com/muthulakshmi558/EarthBubs",
      live: "https://earth-bubs.vercel.app/",
    },
     {
      title: "Cherri Bakery",
      desc: "A website for cake bakery built with React & Tailwind.",
      img: Project9,
      tech: [<FaReact key="1" />],
      repo: "https://github.com/muthulakshmi558/Cherri-Bakery-",
      live: "https://cherri-bakery-s1fm.vercel.app/",
    },
    {
      title: "Dee Plus Yoga Website",
      desc: "Simple yoga website built with React & Tailwind.",
      img: Project10,
      tech: [<FaReact key="1" />],
      repo: "https://github.com/muthulakshmi558/DEE-PLUS",
      live: "https://dee-plus-seven.vercel.app/",
    },
    {
      title: "Supplyhive Stationary Shop",
      desc: "Simple stationary website built with React & Tailwind.",
      img: Project11,
      tech: [<FaReact key="1" />],
      repo: "https://github.com/muthulakshmi558/Supplyhive-Stationery",
      live: "https://supplyhive-stationery.vercel.app/",
    },



  ],
  htmlcss: [
    {
      title: "Sports Equipement Website",
      desc: "Static landing page with HTML, CSS, JS, Bootstrap.",
      img: Project12,
      tech: [<FaHtml5 key="1" />, <FaCss3Alt key="2" />, <FaJs key="3" />, <FaBootstrap key="4" />],
      repo: "https://github.com/Muthulakshmipython/SportsEquipmentWebsite",
      live: "https://muthulakshmipython.github.io/SportsEquipmentWebsite/",
    },
    {
      title: "Photography webiste",
      desc: "Static landing page with HTML, CSS, JS, Bootstrap.",
      img: Project13,
      tech: [<FaHtml5 key="1" />, <FaCss3Alt key="2" />, <FaJs key="3" />, <FaBootstrap key="4" />],
      repo: "https://github.com/muthulakshmi558/Photography-website",
      live: "https://photography-website-new-two.vercel.app/",
    },
  ],
};

const MainProjects = () => {
  const [activeTab, setActiveTab] = useState("python");

  return (
    <section className="relative overflow-hidden py-20 px-6 bg-[#1A1A2E]">
      {/* Background Animations */}
      <div className="absolute inset-0 z-0">
        {/* Floating particles */}
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

        {/* Light streaks */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1/2 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 rounded-full opacity-20"
            style={{ top: `${i * 15 + 5}%`, left: "-50%", rotate: 45 }}
            animate={{ x: ["-50%", "150%"] }}
            transition={{ repeat: Infinity, duration: 20 + i * 5, ease: "linear" }}
          />
        ))}

        {/* Waves */}
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-20" viewBox="0 0 1440 320">
          <path
            fill="url(#gradientWave)"
            fillOpacity="0.2"
            d="M0,128L48,112C96,96,192,64,288,58.7C384,53,480,75,576,106.7C672,139,768,181,864,181.3C960,181,1056,139,1152,144C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <defs>
            <linearGradient id="gradientWave" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#FACC15" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          My <span className="text-yellow-400">Projects</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {["python", "react", "htmlcss"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-gray-900 shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {tab === "python" ? "Python + REST API" : tab === "react" ? "React" : "HTML/CSS"}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {projectsData[activeTab].map((proj, idx) => (
            <motion.div
              key={idx}
              className="bg-[#2E2E48] rounded-2xl shadow-xl overflow-hidden flex flex-col relative"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 20px 40px rgba(255,255,255,0.2)",
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Image */}
              <img src={proj.img} alt={proj.title} className="w-full h-56 object-cover" />

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">{proj.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{proj.desc}</p>
                <div className="flex gap-2 text-xl">
                {proj.tech.map((icon, i) => {
                    let color = "text-white";
                    if (icon.type === FaPython) color = "text-yellow-300";
                    if (icon.type === SiDjango) color = "text-green-500";
                    if (icon.type === SiFastapi) color = "text-pink-400";
                    if (icon.type === FaReact) color = "text-blue-400";
                    if (icon.type === FaHtml5) color = "text-orange-500";
                    if (icon.type === FaCss3Alt) color = "text-blue-600";
                    if (icon.type === FaJs) color = "text-yellow-400";
                    if (icon.type === FaBootstrap) color = "text-purple-500";
                    if (icon.type === FaDatabase) color = "text-green-400";
                    return React.cloneElement(icon, { className: `${color} text-xl`, key: i });
                })}
                </div>

                </div>

                {/* Repo & Live Buttons */}
                <div className="flex justify-between mt-4 gap-2">
                <a
                    href={proj.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white font-semibold text-sm px-4 py-2 rounded-full shadow-lg hover:opacity-90 transition duration-300"
                >
                    Repo
                </a>
                <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white font-semibold text-sm px-4 py-2 rounded-full shadow-lg hover:opacity-90 transition duration-300"
                >
                    Live
                </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainProjects;
