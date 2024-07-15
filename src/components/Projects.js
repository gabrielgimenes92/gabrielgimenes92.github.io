import React from 'react';
import Project from './Project';

const Projects = () => {
  let projects = [
    {
      easyName: 'everypage',
      name: 'EveryPage',
      description:
        'EveryPage is a mobile app dedicated to book lovers keeping track of book collections at home and meeting other people in the nearby community to exchange books.',
      imagePath: '/pictures/EveryPage-01.png',
      alt: '',
      link: 'https://github.com/orgs/Team-Ditto/repositories',
      stack: ['React Native, NestJS, NativeBase, Firebase'],
      projectLink: '/project/everypage',
      webpage: 'https://everypage.ca/',
    },
    {
      easyName: 'billy',
      name: 'Billy',
      description:
        'Save time on creating professional invoices, tracking invoice payment status, and managing business finances.',
      imagePath: '/pictures/billy-1.png',
      alt: '',
      link: 'https://github.com/mercury-squad',
      position: '0 -110px',
      stack: ['React, NodeJS, MUI, MongoDB'],
      projectLink: '/project/billy',
      webpage: '',
    },
    {
      easyName: 'financetracker',
      name: 'Finance Tracker',
      description:
        'Finance Tracker is an app that helps users track and categorize their income and expenses. It provides insights into spending habits, enabling better financial planning.',
      //"Introducing Finance Tracker: a testament to my development expertise. Designed for everyday users, this app empowers you to effortlessly track your income and expenses. By categorizing and filtering transactions, you gain clear insights into your spending habits, enabling you to make informed financial decisions and plan for a secure future.",
      imagePath: '/pictures/financeTracker-1.png',
      alt: '',
      link: 'https://github.com/luferupa/adventurebc',
      stack: ['NextJS, SCSS'],
      projectLink: '/project/financetracker',
      webpage: '',
    },
    {
      easyName: 'pygame',
      name: 'PyGame',
      description:
        "A couple projects for learning the Python library PyGame - This project started by following a very comprehensive tutorial and afterwards I've developed my own mini-game.",
      imagePath: '/pictures/pyGame-1.png',
      alt: '',
      link: 'https://github.com/luferupa/adventurebc',
      stack: ['Python, PyGame'],
      projectLink: '/project/pygame',
      webpage: '',
    },
    {
      easyName: 'adventurebc',
      name: 'Adventure BC',
      description:
        'Search, plan and gather information about outdoor activities available in British Columbia with this single-page webapp',
      imagePath: '/pictures/adventurebc-1.png',
      alt: '',
      link: 'https://github.com/luferupa/adventurebc',
      stack: ['Javascript, SCSS, Firebase'],
      projectLink: '/project/adventurebc',
      webpage: '',
    },
  ];

  return (
    <div className="projectsWrapper">
      <spam id="projects"></spam>
      <section className="projects">
        <h2>Projects</h2>
        <div className="projectItems">
          {projects.map((project) => (
            <Project
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
  );
};

export default Projects;
