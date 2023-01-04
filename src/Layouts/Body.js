import React from "react";
import ProjectCard from "../Components/ProjectCard";
import SocialMenu from "../Components/SocialMenu";

let projects = [
  {
    easyName: "everypage",
    name: "EveryPage",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, excepturi.",
    imagePath: "https://picsum.photos/seed/123/700/700",
    alt: "",
  },
  {
    easyName: "billy",
    name: "Billy",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, excepturi.",
    imagePath: "https://picsum.photos/seed/456/700/700",
    alt: "",
  },
  {
    easyName: "adventurebc",
    name: "Adventure BC",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, excepturi.",
    imagePath: "https://picsum.photos/seed/789/700/700",
    alt: "",
  },
];

const Main = () => {
  return (
    <body>
      <section className="aboutMe">
        <h1>About me</h1>
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
        <h1>Projects</h1>
        <div className="projectItems">
          {projects.map((project) => (
            <ProjectCard
              easyName={project.easyName}
              name={project.name}
              description={project.description}
              imagePath={project.imagePath}
              alt={project.alt}
            />
          ))}
        </div>
      </section>

      <section className="contact">
        <div className="phone">
          <icon></icon>
          <a href="">
            <p>236-886-7471</p>
          </a>
        </div>
        <div className="mail">
          <icon></icon>
          <a href="">
            <p>gabrielcgimenes@gmail.com</p>
          </a>
        </div>
        <button className="curriculum">Curriculum</button>
        <SocialMenu />
      </section>
    </body>
  );
};

export default Main;
