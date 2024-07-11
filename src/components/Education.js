import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <motion.section
      className="my-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-heading">
        <FaGraduationCap /> Education
      </h2>
      <ul>
        <li>
          Bachelor Of Science [B.Sc] (Mathematics), Wilsonia Degree College -
          [WDC], Moradabad (Aug 2020 - Aug 2023)
        </li>
      </ul>
    </motion.section>
  );
};

export default Education;
