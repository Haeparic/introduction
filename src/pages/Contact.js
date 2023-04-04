import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <section className="contact scroll">
      <h2>Contact</h2>
      <div className="contact-list">
        <a
          href="mailto:v567v202@gmail.com"
          target="_blank"
          alt="email"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} /> v567v202@gmail.com
        </a>
        <span>
          <FontAwesomeIcon icon={faPhone} /> +82 10 5339 3459
        </span>
        <a
          href="https://github.com/Haeparic"
          target="_blank"
          alt="github"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGoogle} /> https://github.com/Haeparic
        </a>
      </div>
    </section>
  );
};

export default Contact;
