const ProjectCard = (props) => {
  let { easyName, name, description, imagePath, alt } = props;

  return (
    <section className="singleProject" id={easyName}>
      <div className="imageContainer">
        <img src={imagePath} alt={alt} />
        <div className="titleContainer">
          <h2>{name}</h2>
        </div>
      </div>
      <p>{description}</p>
      <button>Read more</button>
    </section>
  );
};

export default ProjectCard;
