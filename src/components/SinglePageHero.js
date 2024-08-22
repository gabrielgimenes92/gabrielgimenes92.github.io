'use client';

import React from 'react';
import styles from './SinglePageHero.module.scss';
import SingleTech from './SingleTech';

const SinglePageHero = ({ title, subtitle, techStack, stackWidth }) => {
  return (
    <div className={styles.singlePageHero}>
      <div className={styles.ball1} />
      <div className={styles.ball2} />
      <div className={styles.ball3} />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {techStack ? (
        <div className={styles.techStack} style={{ width: stackWidth }}>
          {techStack.map((tech) => (
            <SingleTech name={tech.name} logo={tech.logo} key={tech.name} />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SinglePageHero;
