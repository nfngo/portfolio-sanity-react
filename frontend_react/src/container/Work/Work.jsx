import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { urlFor, client } from "../../client";

import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <div id="work" className="app__section">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__container"
        >
          <div className="app__title">
            <h1>My Creative Portfolio Section</h1>
          </div>
          <div className="app__work-filter">
            <ul>
              {["UI/UX", "Java", "React JS", "PHP", "All"].map(
                (item, index) => (
                  <li
                    key={index}
                    onClick={() => handleWorkFilter(item)}
                    className={`${activeFilter === item ? "item-active" : ""}`}
                  >
                    {item}
                    <div />
                  </li>
                )
              )}
            </ul>
          </div>
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__flex"
          >
            {filterWork.map((work, index) => (
              <div className="app__work-card" key={index}>
                <div className="app__work-card_image">
                  <img src={urlFor(work.imgUrl)} alt={work.name} />
                  <div className="app__work-card_tag">{work.tags[0]}</div>

                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className="app__work-hover app__flex-center"
                  >
                    <a href={work.projectLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex-center"
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                    <a href={work.codeLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex-center"
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  </motion.div>
                </div>
                <h4>{work.title}</h4>
                <p className="p-text">{work.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Work;
