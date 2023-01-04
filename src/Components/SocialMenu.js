import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialMenu = () => {
  const iconLinkedin = <FontAwesomeIcon icon={faLinkedin} />;
  const iconGithub = <FontAwesomeIcon icon={faGithub} />;
  const iconInstagram = <FontAwesomeIcon icon={faInstagram} />;

  return (
    <div className="headerMenu">
      <ul>
        <li>
          <a href="">
            {iconLinkedin}
            <spam className="hidden">LinkedIn</spam>
          </a>
        </li>
        <li>
          <a href="">
            {iconGithub}
            <spam className="hidden">GitHub</spam>
          </a>
        </li>
        <li>
          <a href="">
            {iconInstagram}
            <spam className="hidden">Instagram</spam>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMenu;
