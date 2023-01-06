import React from "react";
import ProjectCard from "../Components/ProjectCard";
import SocialMenu from "../Components/SocialMenu";
import EverypageImage from "../Assets/Pictures/everypage-1.png";
import BillyImage from "../Assets/Pictures/billy-1.png";
import ABCImage from "../Assets/Pictures/adventurebc-1.png";

let projects = [
  {
    easyName: "everypage",
    name: "EveryPage",
    description:
      "EveryPage is a mobile app dedicated to book lovers keeping track of book collections at home and meeting other people in the nearby community to exchange books.",
    imagePath: EverypageImage,
    alt: "",
    link: "https://github.com/orgs/Team-Ditto/repositories",
  },
  {
    easyName: "billy",
    name: "Billy",
    description:
      "Save time on creating professional invoices, tracking invoice payment status, and managing business finances",
    imagePath: BillyImage,
    alt: "",
    link: "https://github.com/mercury-squad",
  },
  {
    easyName: "adventurebc",
    name: "Adventure BC",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, excepturi.",
    imagePath: ABCImage,
    alt: "",
    link: "https://github.com/luferupa/adventurebc",
  },
];

const Main = () => {
  return (
    <body>
      <section className="aboutMe">
        <h2>About me</h2>
        <p>
          I just completed a Web & Mobile App Development Post-Degree at Langara
          College after coming from a career as a mechanical engineer with 10+
          years of experience. In college, I have collaborated with my peers as
          a project manager and developer in web and mobile app projects,
          frontend, backend and, alongside a team of designers, achieved
          complete and mature solutions. My mechanical engineering background
          provides me with other skills like problem-solving, product
          management, interpersonal skills such as meeting facilitator, and
          international experiences.
        </p>
        <img src="" alt="" />
      </section>

      <div className="projectsWrapper">
        <section className="projects">
          <h2>Projects</h2>
          <div className="projectItems">
            {projects.map((project) => (
              <ProjectCard
                easyName={project.easyName}
                name={project.name}
                description={project.description}
                imagePath={project.imagePath}
                alt={project.alt}
                link={project.link}
              />
            ))}
          </div>
        </section>
      </div>

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
