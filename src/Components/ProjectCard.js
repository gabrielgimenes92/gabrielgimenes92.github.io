import { Link, Outlet } from "react-router-dom";
import Project from "../pages/Project"

const ProjectCard = (props) => {
  let { easyName, name, description, imagePath, alt, link, position, stack, projectLink } =
    props;

  return (
    <div className="singleProject" id={easyName}>
      <div className="imageDescriptionWrapper">
        <a href={link}>
          <div className="imageContainer">
            <img
              src={imagePath}
              alt={alt}
              style={{ objectPosition: position }}
            />
            <div className="titleContainer">
              <h3>{name}</h3>
            </div>
          </div>
        </a>
        <p>{description}</p>
      </div>
      <div>
        <p className="stack">
          <b>Stack:</b> {stack}
        </p>
        <Link className="customButton" to={projectLink} element={<Project />} state={{ description: description }}>Learn more</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
