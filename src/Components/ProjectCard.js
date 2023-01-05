const ProjectCard = (props) => {
  let { easyName, name, description, imagePath, alt, link } = props;

  return (
    <section className="singleProject" id={easyName}>
      <div className="imageContainer">
        <a href={link}>
          <img src={imagePath} alt={alt} />
        </a>
        <div className="titleContainer">
          <h2>{name}</h2>
        </div>
      </div>
      <p>{description}</p>
      <button href={link}>Read more</button>
    </section>
  );
};

export default ProjectCard;
