import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import SkillsBanner from "../components/SkillsBanner";
import SkillsPage from "../components/SkillsSection";
import AboutCTA from "../components/AboutCTA";

function Skills() {
  return (
    <>
      <Navbar />
      <SkillsBanner />
      <SkillsPage />
            <AboutCTA />

          <Footer />
</>
   

  );
}

export default Skills;
