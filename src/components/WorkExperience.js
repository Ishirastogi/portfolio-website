import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const WorkExperience = () => {
  return (
    <motion.section
      className="my-5"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-heading">
        <FaBriefcase /> Work Experience
      </h2>
      <h3>Freelance Web Developer | Vidyadayini Digital (Feb 2024)</h3>
      <ul>
        <li>
          Created a Landing Page for the increase in sales for the company
        </li>
        <li>
          Developed a mobile version of the website that improved usability on
          mobile devices
        </li>
      </ul>
      <h3>Freelance Web Developer | Unorthodox Baniya (Mar 2024)</h3>
      <ul>
        <li>
          Implemented a responsive design that allowed the application to be
          used across multiple devices with minimal modifications for product
          shopping
        </li>
      </ul>
    </motion.section>
  );
};

export default WorkExperience;
