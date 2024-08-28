import React from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMailBulk,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const phone = <FontAwesomeIcon icon={faPhone} />;
  const mail = <FontAwesomeIcon icon={faMailBulk} />;
  const pin = <FontAwesomeIcon icon={faLocationDot} />;
  const iconLinkedin = <FontAwesomeIcon icon={faLinkedin} />;
  const iconGithub = <FontAwesomeIcon icon={faGithub} />;

  return (
    <section className={styles.contact}>
      <spam id="contact"></spam>
      <ul className={styles.upperList}>
        <li className={styles.mail}>
          <a href="mailto:gabrielcgimenes@gmail.com" className="icon">
            {mail}
            <p>gabrielcgimenes@gmail.com</p>
          </a>
        </li>
        <li className={styles.contactSocial}>
          <ul>
            <li>
              <a
                className={styles.icon}
                href="https://www.linkedin.com/in/gabrielcgimenes/"
                target={'blank'}
              >
                {iconLinkedin}
                <spam className="hidden">LinkedIn</spam>
              </a>{' '}
            </li>
            <li>
              <a
                className={styles.icon}
                href="https://github.com/gabrielgimenes92"
                target={'blank'}
              >
                {iconGithub}
                <spam className="hidden">GitHub</spam>
              </a>
            </li>
            <li>
              <a className={styles.resumeDownload} target={'blank'} href="">
                Resume
              </a>
            </li>
          </ul>
        </li>
        <li className={styles.phone}>
          <a href="tel: 236-886-7471" className="icon">
            {phone}
            <p>236-886-7471</p>
          </a>
        </li>
        <li className={styles.addressIcon}>
          <p>{pin} Langley, BC</p>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
