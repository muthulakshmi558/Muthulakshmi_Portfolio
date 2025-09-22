import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import ContactBanner from "../components/Contact";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import AboutCTA from "../components/AboutCTA";

function Contact() {
  return (
    <>
      <Navbar />
      <ContactBanner />
      <ContactForm />
      <AboutCTA />
      <Footer />
</>
   

  );
}

export default Contact;
