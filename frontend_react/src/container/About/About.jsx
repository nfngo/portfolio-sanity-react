import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./About.scss";

const abouts = [
  {
    title: "About",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam cupiditate quod ex iure quasi, vel aperiam necessitatibus distinctio ipsum officia?",
  },
  {
    title: "Education",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam cupiditate quod ex iure quasi, vel aperiam necessitatibus distinctio ipsum officia?",
  },
  {
    title: "Hobbies",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam cupiditate quod ex iure quasi, vel aperiam necessitatibus distinctio ipsum officia?",
  },
  {
    title: "Location",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam cupiditate quod ex iure quasi, vel aperiam necessitatibus distinctio ipsum officia?",
  },
];

const About = () => {
  return (
    <>
      <div id="about" className="app__section">
        <div className="app__container">
          <div className="app__title">
            <p>Who am I</p>
            <h1>Random cliché phrase</h1>
          </div>
          <div className="app__flex">
            {abouts.map((about, index) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: "tween" }}
                className="app__about-card"
                key={about.title + index}
              >
                <div />
                <h2>{about.title}</h2>
                <p class="p-text">{about.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
