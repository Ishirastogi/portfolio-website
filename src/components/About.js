import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      className="my-5"
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="section-heading">About Me</h2>
      <p>
        I am a passionate web developer with a strong background in creating dynamic and responsive web applications using modern technologies like React, Node.js, and MongoDB.
      </p>
    </motion.section>
  );
}

export default About;
