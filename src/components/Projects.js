import React from 'react';
import Project from './Project';
import styles from './Projects.module.scss';

const Projects = () => {
  let projects = [
    {
      easyName: 'bullet-journal',
      name: 'Bullet Journal',
      description: 'Bullet Journal description',
      imagePath: '/pictures/EverypageThumb.png',
      alt: '',
      link: 'https://github.com/orgs/Team-Ditto/repositories',
      stack: ['NEXT.JS, CSS'],
      projectLink: '/projects/bullet-journal',
      webpage: 'https://everypage.ca/',
    },
    {
      easyName: 'list-app',
      name: 'List App',
      description: 'List App description',
      //"Introducing Finance Tracker: a testament to my development expertise. Designed for everyday users, this app empowers you to effortlessly track your income and expenses. By categorizing and filtering transactions, you gain clear insights into your spending habits, enabling you to make informed financial decisions and plan for a secure future.",
      imagePath: '/pictures/FinanceTrackerThumb.png',
      alt: '',
      link: 'https://github.com/luferupa/adventurebc',
      stack: ['NEXT.JS, Node.JS, MongoDB'],
      projectLink: '/projects/finance-tracker',
      webpage: '',
    },
    {
      easyName: 'finance-tracker',
      name: 'Finance Tracker',
      description:
        'Finance Tracker is an app that helps users track and categorize their income and expenses. It provides insights into spending habits, enabling better financial planning.',
      //"Introducing Finance Tracker: a testament to my development expertise. Designed for everyday users, this app empowers you to effortlessly track your income and expenses. By categorizing and filtering transactions, you gain clear insights into your spending habits, enabling you to make informed financial decisions and plan for a secure future.",
      imagePath: '/pictures/FinanceTrackerThumb.png',
      alt: '',
      link: 'https://github.com/luferupa/adventurebc',
      stack: ['NEXT.JS, SASS'],
      projectLink: '/projects/finance-tracker',
      webpage: '',
    },
    {
      easyName: 'py-game',
      name: 'PyGame',
      description:
        "A couple projects for learning the Python library PyGame - This project started by following a very comprehensive tutorial and afterwards I've developed my own mini-game.",
      imagePath: '/pictures/PyGameThumb.png',
      alt: '',
      link: 'https://github.com/luferupa/adventurebc',
      stack: ['Python, PyGame'],
      projectLink: '/projects/py-game',
      webpage: '',
    },
    {
      easyName: 'everypage',
      name: 'EveryPage',
      description:
        'EveryPage is a mobile app dedicated to book lovers keeping track of book collections at home and meeting other people in the nearby community to exchange books.',
      imagePath: '/pictures/EverypageThumb.png',
      alt: '',
      link: 'https://github.com/orgs/Team-Ditto/repositories',
      stack: ['React Native, NestJS, NativeBase, Firebase'],
      projectLink: '/projects/everypage',
      webpage: 'https://everypage.ca/',
    },
    {
      easyName: 'billy',
      name: 'Billy',
      description:
        'Save time on creating professional invoices, tracking invoice payment status, and managing business finances.',
      imagePath: '/pictures/BillyThumb.png',
      alt: '',
      link: 'https://github.com/mercury-squad',
      stack: ['React, Node.JS, MUI, MongoDB'],
      projectLink: '/projects/billy',
      webpage: '',
    },
    {
      easyName: 'adventurebc',
      name: 'Adventure BC',
      description:
        'Search, plan and gather information about outdoor activities available in British Columbia with this single-page webapp',
      imagePath: '/pictures/AdventureBCThumb.png',
      alt: '',
      link: 'https://github.com/luferupa/adventurebc',
      stack: ['JavaScript, SASS, Firebase'],
      projectLink: '/projects/adventurebc',
      webpage: '',
    },
  ];

  return (
    <div className={styles.projectsWrapper}>
      <spam id="projects"></spam>
      <section className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.projectItems}>
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
