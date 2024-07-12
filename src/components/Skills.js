import React from 'react';
import Skill from './Skill';

import {
  javascriptLogo,
  typescriptLogo,
  reactLogo,
  nodeJSLogo,
  githubLogo,
} from '../assets/logos';

const Skills = () => {
  return (
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
          <p className="name">React</p>
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
  );
};

export default Skills;
