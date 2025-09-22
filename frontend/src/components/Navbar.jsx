import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoImage from "../assets/images/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
  ];

  const logo = (
    <Link to="/">
      <img src={LogoImage} alt="Logo" className="h-12 w-auto" />
    </Link>
  );

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-[#2E0249]/90 via-[#570A57]/80 to-[#F806CC]/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        {logo}

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white font-medium items-center">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}

          {/* Contact Me Button */}
          <li>
            <Link
              to="/contact"
              className="bg-[#FFD60A] text-[#2E0249] px-6 py-2 rounded-lg font-semibold shadow-lg 
              animate-[zoomInOut_2s_ease-in-out_infinite] transition-all duration-500"
            >
              Contact Me
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-yellow-400 cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#2E0249]/90 text-white w-full absolute top-full left-0 shadow-lg">
          <ul className="hidden md:flex gap-6 text-white font-medium items-center">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className="relative group cursor-pointer"
              >
                <Link to={item.path} className="transition-colors duration-300">
                  {item.name}
                </Link>

                {/* Animated underline */}
                <span
                  className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-500 group-hover:w-full"
                ></span>
              </li>
            ))}

            {/* Contact Me Button */}
            <li>
              <Link
                to="/contact"
                className="bg-[#FFD60A] text-[#2E0249] px-6 py-2 rounded-lg font-semibold shadow-lg 
                animate-[zoomInOut_2s_ease-in-out_infinite] transition-all duration-500"
              >
                Contact Me
              </Link>
            </li>
          </ul>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
