//Component to showcase the tech stack utilized on project, shows image followed by legend of stack name

import React from 'react';
import styles from './TechStack.module.scss';

const TechStack = ({ techStack }) => {
  return (
    <div className={styles.techStackWrapper}>
      <h1>Tech stack</h1>
      <div className={styles.techStack}>
        {techStack.map((tech) => (
          <div className={styles.singleTech} key={tech.name}>
            <>{tech.logo}</>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
