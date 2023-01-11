const ProjectCard = (props) => {
  let { easyName, name, description, imagePath, alt, link, position, stack } =
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
        <a className="readMore" href={link}>
          Learn more
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
