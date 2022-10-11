import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query =
      '*[_type == "experiences"] {..., works[]->} | order(year desc)';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperience(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div id="skills" className="app__section">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__container"
      >
        <div className="app__title">
          <h1>Skills & Experience</h1>
        </div>
        <div className="app__skills-container">
          <div className="app__skills-exp">
            {experience?.map((experience, index) => (
              <motion.div
                className="app__skills-exp-item"
                key={`${experience.year}-${index}`}
              >
                <div className="app__skills-exp-year">
                  <p>{experience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {experience.works?.map((work, index) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={work.company}
                        key={`${work.name}-${index}`}
                      >
                        <h4>{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>
                      <ReactTooltip
                        id={work.company}
                        effect="solid"
                        arrowColor="#56C7F5"
                        className="skills-tooltip"
                      >
                        {work.desc}
                      </ReactTooltip>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div className="app__skills-list">
            {skills?.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item"
                key={skill.name}
              >
                <div className="app__flex-center">
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
