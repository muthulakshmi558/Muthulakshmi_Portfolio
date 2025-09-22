import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import AboutCTA from "../components/AboutCTA";
import ProjectBanner from "../components/ProjectBanner";
import MiniProjectsSection from "../components/MiniProjectsSection";
import MainProjects from "../components/MainProjects";

function Project() {
  return (
    <>
      <Navbar />
        <ProjectBanner />
        <MiniProjectsSection />
        <MainProjects />
      <AboutCTA />
      <Footer />
</>
   

  );
}

export default Project;
