import React from 'react';
import Skill from './Skill';
import styles from './Skills.module.scss';

import {
  javascriptLogo,
  typescriptLogo,
  reactLogo,
  nodeJSLogo,
  githubLogo,
} from '../assets/logos';

const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2>Skills</h2>
      <ul className={styles.skillsList}>
        <li>
          <p>{javascriptLogo}</p>
          <p className={styles.name}>JavaScript</p>
        </li>
        <li>
          <p>{typescriptLogo}</p>
          <p className={styles.name}>Typescript</p>
        </li>
        <li>
          <p>{reactLogo}</p>
          <p className={styles.name}>React</p>
        </li>
        <li>
          <p>{nodeJSLogo}</p>
          <p className={styles.name}>NodeJs</p>
        </li>
        <li>
          <p>{reactLogo}</p>
          <p className={styles.name}>React Native</p>
        </li>
        <li>
          <p>{githubLogo}</p>
          <p className={styles.name}>GitHub</p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
