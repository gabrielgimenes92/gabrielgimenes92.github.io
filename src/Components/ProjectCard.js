const ProjectCard = (props) => {
  let { easyName, name, description, imagePath, alt, link, position } = props;

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
      <button href={link}>Read more</button>
    </div>
  );
};

export default ProjectCard;
