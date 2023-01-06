import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Resume from "../Assets/Resume/Resume.pdf";

const SocialMenu = () => {
  const iconLinkedin = <FontAwesomeIcon icon={faLinkedin} />;
  const iconGithub = <FontAwesomeIcon icon={faGithub} />;
  const iconInstagram = <FontAwesomeIcon icon={faInstagram} />;

  return (
    <div className="headerMenu">
      <ul>
        <li>
          <a className="resumeDownload" target={"blank"} href={Resume}>
            Resume
          </a>
        </li>
        <li>
          <a
            className="icon"
            href="https://www.linkedin.com/in/gabrielcgimenes/"
            target={"blank"}
          >
            {iconLinkedin}
            <spam className="hidden">LinkedIn</spam>
          </a>
        </li>
        <li>
          <a
            className="icon"
            href="https://github.com/gabrielgimenes92"
            target={"blank"}
          >
            {iconGithub}
            <spam className="hidden">GitHub</spam>
          </a>
        </li>
        <li>
          <a
            className="icon"
            href="https://www.instagram.com/gabrielcgimenes/"
            target={"blank"}
          >
            {iconInstagram}
            <spam className="hidden">Instagram</spam>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMenu;
