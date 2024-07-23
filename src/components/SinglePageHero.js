import React from 'react';
import styles from './SinglePageHero.module.scss';

const SinglePageHero = ({ title, subtitle }) => {
  return (
    <div className={styles.singlePageHero}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default SinglePageHero;
