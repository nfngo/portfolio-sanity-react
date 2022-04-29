import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { client } from "../../client";
import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"] | order(title asc)';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <div id="about" className="app__section">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__container"
        >
          <div className="app__title">
            <p>Who am I</p>
            <h1>"It always seems impossible until it’s done"</h1>
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
                <p className="p-text">{about.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
