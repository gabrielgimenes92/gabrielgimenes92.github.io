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
    stack: ["React Native, NestJS, NativeBase, Firebase"],
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
    stack: ["React, NodeJS, MUI, MongoDB"],
  },
  {
    easyName: "adventurebc",
    name: "Adventure BC",
    description:
      "Search, plan and gather information about outdoor activities available in British Columbia.",
    imagePath: ABCImage,
    alt: "",
    link: "https://github.com/luferupa/adventurebc",
    stack: ["Javascript, SCSS, Firebase"],
  },
];

const phone = <FontAwesomeIcon icon={faPhone} />;
const mail = <FontAwesomeIcon icon={faMailBulk} />;

const Main = () => {
  return (
    <body>
      <section className="aboutMe" id="about">
        <h2>About me</h2>
        <p>
          Graduated from Langara College - Web & Mobile App Development
          Post-Degree, awarded 3 times with the Dean's Honor Roll, and second
          best capstone project of the semester. Langara's course is set to
          mimic a startup environment by having designers and developers work
          together to, in a 12-week period per semester, conceptualize and
          develop a product. Along the semesters these projects gave me
          experience in React Native, React, Swift, Android (using Java),
          Javascript, SCSS, and HTML. Furthermore, I'm originally a mechanical
          engineer with over 10 years of experience and I believe my background
          provides me with other skills like problem-solving, product
          management, and interpersonal skills.
        </p>
        <img src="" alt="" />
      </section>

      <div className="projectsWrapper" id="projects">
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
                stack={project.stack}
              />
            ))}
          </div>
        </section>
      </div>

      <section className="contact" id="contact">
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
