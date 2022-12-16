const ProjectCard = (props) => {
  let { easyName, name, description, imagePath, alt } = props;

  return (
    <section className="singleProject" id={easyName}>
      <img src={imagePath} alt={alt} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default ProjectCard;
