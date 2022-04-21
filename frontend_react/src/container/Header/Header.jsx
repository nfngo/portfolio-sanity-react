import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div id="home">
      <div className="app__header">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="app__header-title"
        >
          <div className="app__header-title_heading">
            <h1>
              Hi, I'm <span>Nuno</span>!
            </h1>
          </div>
          <div class="app__header-title_subheading">
            <p>Web Developer</p>
            <p>Freelancer</p>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, delayChildren: 0.5 }}
          className="app__header-hero"
        >
          <img src={images.profile} alt="profile" />
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.css, images.html, images.react].map((item, index) => (
            <div class="circle" key={`circle-${index}`}>
              <img src={item} alt="profile_bg" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
