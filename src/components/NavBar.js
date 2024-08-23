'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './NavBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import resume from '/pdfs/Resume.pdf';

const NavBar = () => {
  const iconLinkedin = <FontAwesomeIcon icon={faLinkedin} />;
  const iconGithub = <FontAwesomeIcon icon={faGithub} />;
  const hamburger = <FontAwesomeIcon icon={faBars} />;
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const handleClick = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
    console.log(showHamburgerMenu);
  };

  return (
    <div className={styles.navBarWrapper}>
      <div className={styles.navBar}>
        <div className={styles.desktopSizeHeader}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#projects">Projects</Link>
            </li>
            <ul className={styles.navBarSubMenu}>
              {/* <li>
              <Link href="/adventurebc">AdventureBC</Link>
            </li> */}
              <li>
                <Link href="/billy">Billy</Link>
              </li>
              {/* <li>
              <Link href="/bullet-journal">Bullet Journal</Link>
            </li> */}
              <li>
                <Link href="/everypage">EveryPage</Link>
              </li>
              {/* <li>
              <Link href="/finance-tracker">Finance Tracker</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/py-game">Py Game</Link>
            </li> */}
            </ul>
          </ul>
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
              <a
                className={styles.resumeDownload}
                target={'blank'}
                href="/pdfs/Resume.pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <a className={styles.tabletSizeHeader} onClick={handleClick}>
          {hamburger}
        </a>
      </div>
      {showHamburgerMenu ? (
        <div className={styles.floatingMenu}>
          <ul>
            <li>
              <Link href="/" onClick={() => setShowHamburgerMenu(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" onClick={() => setShowHamburgerMenu(false)}>
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                onClick={() => setShowHamburgerMenu(false)}
              >
                Projects
              </Link>
            </li>
            {/* <ul className={styles.navBarSubMenu}>
              <li>
                <Link href="/billy">Billy</Link>
              </li>
              <li>
                <Link href="/everypage">EveryPage</Link>
              </li>
            </ul> */}
          </ul>
          <ul className={styles.socialFloat}>
            <li>
              <a
                className={styles.icon}
                href="https://www.linkedin.com/in/gabrielcgimenes/"
                target={'blank'}
                onClick={() => setShowHamburgerMenu(false)}
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
                onClick={() => setShowHamburgerMenu(false)}
              >
                {iconGithub}
                <spam className="hidden">GitHub</spam>
              </a>
            </li>
            <li>
              <a
                className={styles.resumeDownload}
                target={'blank'}
                href="/pdfs/Resume.pdf"
                onClick={() => setShowHamburgerMenu(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBar;
