import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="my-5 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out to me via email at{" "}
        <a href="mailto:ishi.rastogi@icloud.com">ishi.rastogi@icloud.com</a>.
      </p>
    </motion.section>
  );
};

export default Contact;
