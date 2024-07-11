import React from "react";
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";

const TechnicalSkills = () => {
  return (
    <motion.section
      className="my-5"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-heading">
        <FaTools /> Technical Skills
      </h2>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React JS</li>
        <li>Next JS</li>
        <li>Node JS</li>
        <li>MongoDB</li>
        <li>SQL</li>
      </ul>
    </motion.section>
  );
};

export default TechnicalSkills;
