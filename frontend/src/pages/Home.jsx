import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HomeAbout from "../components/HomeAbout";
import HomeSkills from "../components/HomeSkills";
import HomeContact from "../components/HomeContact";
import HomeProjects from "../components/HomeProjects";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HomeAbout />
      <HomeSkills />
      <HomeContact />
      <HomeProjects />
      <Footer />
</>
   

  );
}

export default Home;
