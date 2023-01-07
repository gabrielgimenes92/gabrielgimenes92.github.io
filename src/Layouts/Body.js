import React from "react";
import ProjectCard from "../Components/ProjectCard";
import SocialMenu from "../Components/SocialMenu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

import EverypageImage from "../Assets/Pictures/everypage-1.png";
import BillyImage from "../Assets/Pictures/billy-2.png";
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
      "Save time on creating professional invoices, tracking invoice payment status, and managing business finances.",
    imagePath: BillyImage,
    alt: "",
    link: "https://github.com/mercury-squad",
    position: "0 -110px",
  },
  {
    easyName: "adventurebc",
    name: "Adventure BC",
    description:
      "Search, plan and gather information about outdoor activities available in British Columbia.",
    imagePath: ABCImage,
    alt: "",
    link: "https://github.com/luferupa/adventurebc",
  },
];

const phone = <FontAwesomeIcon icon={faPhone} />;
const mail = <FontAwesomeIcon icon={faMailBulk} />;

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
                position={project.position}
              />
            ))}
          </div>
        </section>
      </div>

      <section className="contact">
        <ul className="upperList">
          <li className="mail">
            <a href="mailto:gabrielcgimenes@gmail.com" className="icon">
              {mail}
              <p>gabrielcgimenes@gmail.com</p>
            </a>
          </li>
          <li className="phone">
            <a href="tel: 236-886-7471" className="icon">
              {phone}
              <p>236-886-7471</p>
            </a>
          </li>
          <li className="contactSocial">
            <SocialMenu />
          </li>
        </ul>
      </section>
    </body>
  );
};

export default Main;
