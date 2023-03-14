import React from "react";
import ProjectCard from "../Components/ProjectCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faReact, faSquareJs, faNodeJs, faGithub } from "@fortawesome/free-brands-svg-icons";

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
    projectLink: "/project/EveryPage",
    webpage: "https://everypage.ca/",
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
    projectLink: "/project/Billy",
    webpage: "http://invoicebilly.com",
  },
  {
    easyName: "adventurebc",
    name: "Adventure BC",
    description:
      "Search, plan and gather information about outdoor activities available in British Columbia with this single-page webapp",
    imagePath: ABCImage,
    alt: "",
    link: "https://github.com/luferupa/adventurebc",
    stack: ["Javascript, SCSS, Firebase"],
    projectLink: "/project/AdventureBC",
    webpage: "",
  },
];

const phone = <FontAwesomeIcon icon={faPhone} />;
const mail = <FontAwesomeIcon icon={faMailBulk} />;
const reactLogo = <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="React Logo"/>;
const javascriptLogo = <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Javascript Logo"/>;
const nodeJSLogo = <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="NodeJS Logo"/>;
const githubLogo = <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Typescript Logo"/>
const typescriptLogo = <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript Logo"/>



const Main = () => {



  return (
    <body>
      <section className="aboutMe">
        <spam id="about"></spam>
        <h2>About me</h2>
        <p>
          Graduated from Langara College - Web & Mobile App Development
          Post-Degree, awarded 4 times with the Dean's Honor Roll, and second
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
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul className="skillsList">
          <li>
              <p>{javascriptLogo}</p>
              <p className="name">JavaScript</p>
          </li>
          <li>
              <p>{typescriptLogo}</p>
              <p className="name">Typescript</p>
          </li>
          <li>
              <p>{reactLogo}</p>
              <p className="name">React </p>
          </li>
          <li>
              <p>{nodeJSLogo}</p>
              <p className="name">NodeJs</p>
          </li>
          <li>
              <p>{reactLogo}</p>
              <p className="name">React Native</p>
          </li>
          <li>
              <p>{githubLogo}</p>
              <p className="name">GitHub</p>
          </li>
        </ul>
      </section>

      <div className="projectsWrapper">
        <spam id="projects"></spam>
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
                projectLink={project.projectLink}
                webpage={project.webpage}
              />
            ))}
          </div>
        </section>
      </div>
    </body>
  );
};

export default Main;
