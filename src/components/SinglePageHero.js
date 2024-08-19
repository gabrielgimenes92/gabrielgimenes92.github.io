import React from 'react';
import styles from './SinglePageHero.module.scss';

const SinglePageHero = ({ title, subtitle, techStack }) => {
  return (
    <div className={styles.singlePageHero}>
      <div className={styles.ball1} />
      <div className={styles.ball2} />
      <div className={styles.ball3} />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div className={styles.techStack}>
        {techStack.map((tech) => (
          <div className={styles.singleTech} key={tech.name}>
            <div>{tech.logo}</div>
            {/* <p>{tech.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglePageHero;
