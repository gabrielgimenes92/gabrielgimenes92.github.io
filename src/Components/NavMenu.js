import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import SocialMenu from "./SocialMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavMenu = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const hamburger = <FontAwesomeIcon icon={faBars} />;
  const x = <FontAwesomeIcon icon={faXmark} />;

  function toggleMenu() {
    const floatingMenu = document.getElementById("floatingMenu");
    floatingMenu.classList.toggle("hidden");
    setNavBarOpen(!navBarOpen);
  }

  if (useLocation().pathname === "/") {
    return (
      <div className="headerMenu">
        <div className="mobileSize">
          <a onClick={toggleMenu}>{navBarOpen ? x : hamburger}</a>
        </div>
        <div className="floatingMenu hidden" id="floatingMenu">
          <ul>
            <li>
              <a href="#" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About me
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact me
              </a>
            </li>
            <li>
              <SocialMenu />
            </li>
          </ul>
        </div>

        <div className="tabletSize">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact me</a>
            </li>
          </ul>
          <SocialMenu />
        </div>
      </div>
    );
  } else {
    return (
      <div className="headerMenu">
        <div className="mobileSize">
          <a onClick={toggleMenu}>{navBarOpen ? x : hamburger}</a>
        </div>
        <div className="floatingMenu hidden" id="floatingMenu">
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <HashLink to="/#about" onClick={toggleMenu}>
                About me
              </HashLink>
            </li>
            <li>
              <HashLink to="/#projects" onClick={toggleMenu}>
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink to="/#contact" onClick={toggleMenu}>
                Contact me
              </HashLink>
            </li>
            <li>
              <SocialMenu />
            </li>
          </ul>
        </div>

        <div className="tabletSize">
          <ul>
            <Link to="/">Home</Link>
            <HashLink to="/#about">About me</HashLink>
            <HashLink to="/#projects">Projects</HashLink>
            <HashLink to="/#contact">Contact me</HashLink>
          </ul>
          <SocialMenu />
        </div>
      </div>
    );
  }
};

export default NavMenu;
