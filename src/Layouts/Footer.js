import React from "react";
import SocialMenu from "../Components/SocialMenu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {

  const phone = <FontAwesomeIcon icon={faPhone} />;
  const mail = <FontAwesomeIcon icon={faMailBulk} />;

  return(
  <section className="contact">
    <spam id="contact"></spam>
    <ul className="upperList">
      <li className="mail">
        <a href="mailto:gabrielcgimenes@gmail.com" className="icon">
          {mail}
          <p>gabrielcgimenes@gmail.com</p>
        </a>
      </li>
      <li className="phone">
        <a href="tel: 236-886-7471" className="icon">
          {phone}
          <p>236-886-7471</p>
        </a>
      </li>
      <li className="contactSocial">
        <SocialMenu />
      </li>
    </ul>
  </section>
);
};

export default Footer;
