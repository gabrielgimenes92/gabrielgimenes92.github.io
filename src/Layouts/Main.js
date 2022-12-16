import React from "react";
import ProjectCard from "../Components/ProjectCard";

let projects = [
  {
    easyName: "everypage",
    name: "EveryPage",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, excepturi.",
    imagePath: "",
    alt: "",
  },
  {
    easyName: "billy",
    name: "Billy",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, excepturi.",
    imagePath: "",
    alt: "",
  },
  {
    easyName: "adventurebc",
    name: "Adventure BC",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, excepturi.",
    imagePath: "",
    alt: "",
  },
];

const Main = () => {
  return (
    <>
      <section className="hero">
        <h1>Gabriel Costa Gimenes</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          facere sapiente, totam nesciunt ullam commodi.
        </p>
        <p>
          Quam facilis expedita, quasi blanditiis, ab corporis repellendus
          fugiat magni necessitatibus quaerat itaque laboriosam non.
        </p>
        <img src="" alt="" />
      </section>

      <section className="projects">
        {projects.map((project) => (
          <ProjectCard
            easyName={project.easyName}
            name={project.name}
            description={project.description}
            imagePath={project.imagePath}
            alt={project.alt}
          />
        ))}
      </section>
    </>
  );
};

export default Main;
