import React from "react";
import Scrollspy from "react-scrollspy";

import "./NavigationDots.scss";

const sections = ["home", "about", "skills", "work", "contact"];

const NavigationDots = () => {
  return (
    <div className="app__navigation">
      <Scrollspy items={sections} currentClassName="active">
        {sections.map((item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
          />
        ))}
      </Scrollspy>
    </div>
  );
};

export default NavigationDots;
