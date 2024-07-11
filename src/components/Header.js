import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="text-center my-5"
      initial={{ opacity: 1, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="display-4">Ishi Rastogi</h1>
      <p className="lead">Web Developer</p>
      <div>
        <a
          href="https://linkedin.com/in/ishi"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/ishi"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FaGithub size={30} />
        </a>
        <a href="mailto:ishi.rastogi@icloud.com" className="mx-2">
          <FaEnvelope size={30} />
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
