import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import AboutBanner from "../components/AboutBanner";
import AboutTimeline from "../components/AboutTimeline";
import AboutCTA from "../components/AboutCTA";

function About() {
  return (
    <>
      <Navbar />
      <AboutBanner />
      <AboutTimeline />
      <AboutCTA />
      <Footer />
</>
   

  );
}

export default About;
