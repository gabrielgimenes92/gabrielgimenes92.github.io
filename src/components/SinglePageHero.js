'use client';

import React from 'react';
import styles from './SinglePageHero.module.scss';
import SingleTech from './SingleTech';

const SinglePageHero = ({ title, subtitle, techStack }) => {
  return (
    <div className={styles.singlePageHero}>
      <div className={styles.ball1} />
      <div className={styles.ball2} />
      <div className={styles.ball3} />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {techStack ? (
        <div className={styles.techStack}>
          {techStack.map((tech) => (
            <SingleTech name={tech.name} logo={tech.logo} />
            // <div className={styles.singleTech} key={tech.name}>
            //   <div
            //     onMouseEnter={() => handleHover('true')}
            //     onMouseLeave={() => handleHover('false')}
            //   >
            //     {tech.logo}
            //   </div>
            //   <p style={theStyle}>{tech.name}</p>
            // </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SinglePageHero;
