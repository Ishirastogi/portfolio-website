import React from "react";
import { motion } from "framer-motion";
import ecommerceImage from "../images/ecomerce.png";
import blogImage from "../images/blog.png";
import dashboardImage from "../images/news.png";

const projects = [
  {
    title: "Responsive ECommerce Website",
    description: "Utilizes React JS for dynamic and responsive user interface.",
    image: ecommerceImage,
  },
  {
    title: "Responsive Blog Website",
    description: "User-friendly interface for easy blog post creation.",
    image: blogImage,
  },
  {
    title: "News Website",
    description:
      "Neighborgood News is a React project that delivers hyper-local news updates to foster informed and connected communities.",
    image: dashboardImage,
  },
];

const Projects = () => {
  return (
    <motion.section
      className="my-5"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="section-heading">Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <motion.div
            className="col-md-4 mb-4"
            key={index}
            whileHover={{ scale: 1.05 }}
          >
            <div className="card h-100">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
