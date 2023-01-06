const ProjectCard = (props) => {
  let { easyName, name, description, imagePath, alt, link } = props;

  return (
    <div className="singleProject" id={easyName}>
      <a href={link}>
        <div className="imageContainer">
          <img src={imagePath} alt={alt} />
          <div className="titleContainer">
            <h3>{name}</h3>
          </div>
        </div>
      </a>
      <p>{description}</p>
      <button href={link}>Read more</button>
    </div>
  );
};

export default ProjectCard;
