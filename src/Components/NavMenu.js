import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import SocialMenu from "./SocialMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
            {/* <li>
            <Link to="/">Home</Link>
          </li> */}
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
        <div className="tabletSize sameForMobile">
          <ul>
            <li>
              <Link to="/">&#60; Back</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default NavMenu;
