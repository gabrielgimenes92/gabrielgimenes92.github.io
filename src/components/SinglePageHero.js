import React from 'react';
import styles from './SinglePageHero.module.scss';

const SinglePageHero = (props) => {
  return (
    <div className={styles.singlePageHero}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default SinglePageHero;
