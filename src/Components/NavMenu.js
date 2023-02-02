import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SocialMenu from "./SocialMenu";



const NavMenu = () => {
  const hamburger = <FontAwesomeIcon icon={faBars} />;

  function toggleMenu() {
    const floatingMenu = document.getElementById('floatingMenu');
    floatingMenu.classList.toggle("hidden")
  }

  return (
    <div className="headerMenu">
      <div className="mobileSize">
        <a onClick={toggleMenu}>
          {hamburger}
        </a>
      </div>

      <div className="floatingMenu hidden" id="floatingMenu">
        <ul>
          <li><a href="#" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About me</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact me</a></li>
          <li><SocialMenu /></li>
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
};

export default NavMenu;
