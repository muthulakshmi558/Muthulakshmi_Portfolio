// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Home | My Portfolio</title>
              </Helmet>
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Helmet>
                <title>About | My Portfolio</title>
              </Helmet>
              <About />
            </>
          }
        />
        <Route
          path="/skills"
          element={
            <>
              <Helmet>
                <title>Skills | My Portfolio</title>
              </Helmet>
              <Skills />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Helmet>
                <title>Projects | My Portfolio</title>
              </Helmet>
              <Project />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Helmet>
                <title>Contact | My Portfolio</title>
              </Helmet>
              <Contact />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
