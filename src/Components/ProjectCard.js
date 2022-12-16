const ProjectCard = (props) => {
  let { easyName, name, description, imagePath, alt } = props;

  return (
    <section className={easyName}>
      <img src={imagePath} alt={alt} />
      <h2>{name}</h2>
      <p>{description}</p>
    </section>
  );
};

export default ProjectCard;
