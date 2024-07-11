import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const Certificates = () => {
  return (
    <motion.section
      className="my-5"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-heading">
        <FaCertificate /> Certificates
      </h2>
      <ul>
        <li>The Complete Web Development Bootcamp at Udemy - Dr Angela Yu</li>
        <li>
          The Ultimate React Course: React, Redux & More at Udemy - Jonas
          Schmedtmann
        </li>
      </ul>
    </motion.section>
  );
};

export default Certificates;
