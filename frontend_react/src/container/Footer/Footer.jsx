import React, { useState } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <div id="contact" className="app__section">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__container"
        >
          <div className="app__title">
            <h1>Take a Coffe & Chat With Me</h1>
          </div>
          <div className="app__contact-info">
            <div className="app__contact-info_contact">
              <img src={images.email} alt="email" />
              <a href="mailto:nfnoliveira@gmail.com" className="p-text">
                nfnoliveira@gmail.com
              </a>
            </div>
            <div className="app__contact-info_contact">
              <img src={images.mobile} alt="mobile" />
              <a href="tel: +351 925056452" className="p-text">
                +351 925056452
              </a>
            </div>
          </div>

          {!isFormSubmitted ? (
            <div className="app__contact-form">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={handleChangeInput}
              />

              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />

              <textarea
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />

              <button type="button" onClick={handleSubmit}>
                {loading ? "Sending" : "Send Message"}
              </button>
            </div>
          ) : (
            <div className="app__contact-form_message">
              <h3 className="head-text">Thank you for getting in touch</h3>
            </div>
          )}
        </motion.div>
        <div className="copyright">
          <p>@2022 NUNO</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
