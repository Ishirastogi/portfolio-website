import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import TechnicalSkills from "./components/TechnicalSkills";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Projects />
      <Education />
      <TechnicalSkills />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
