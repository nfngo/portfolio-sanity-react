import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

import "./Navbar.scss";
import { images } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "skills", "work", "contact"].map((item) => (
          <li key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 300 }}
              exit={{ width: 0, transition: { delay: 0.3, duration: 0.3 } }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["home", "about", "skills", "work", "contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
