import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/nunofng-oliveira/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a href="https://github.com/nfngo" target="_blank" rel="noreferrer">
          <FiGithub />
        </a>
      </div>
      <div>
        <a href="mailto:hello@nuno.com">
          <HiOutlineMail />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
