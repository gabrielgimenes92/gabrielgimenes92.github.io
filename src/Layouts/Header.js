import NavMenu from "../Components/NavMenu";
import SocialMenu from "../Components/SocialMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons";

const reactLogo = <FontAwesomeIcon icon={faReact} />;
const javascriptLogo = <FontAwesomeIcon icon={faSquareJs} />;

const Header = () => {
  return (
    <header className="backgroundHeader">
      <div className="navMenuWrapper">
        <div className="navMenus">
          <NavMenu />
        </div>
      </div>
      <section className="home">
        <h1>Gabriel Costa Gimenes</h1>
        <h2>Junior frontend / mobile developer</h2>
        <div className="skills">
          <div>
            <p>{javascriptLogo}</p>
            <p>JavaScript</p>
          </div>
          <div>
            <p>{reactLogo}</p>
            <p>React & React Native</p>
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;
