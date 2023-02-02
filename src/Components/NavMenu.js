import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SocialMenu from "./SocialMenu";



const NavMenu = () => {
  const hamburger = <FontAwesomeIcon icon={faBars} />;

  return (
    <div className="headerMenu">
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
      <div className="mobileSize">
        <a>{hamburger}</a>
      </div>
    </div>
  );
};

export default NavMenu;
