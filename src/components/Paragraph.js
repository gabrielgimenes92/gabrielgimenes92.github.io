//Component to create a paragraph, can have a title or not, h1 or h2.

import React from 'react';
import styles from './Paragraph.module.scss';

const Paragraph = ({ title, paragraphs }) => {
  return (
    <div className={styles.paragraphWrapper}>
      <div className={styles.paragraph}>
        {title ? <h1>{title}</h1> : <></>}
        {paragraphs ? (
          paragraphs.map((item) => <p id={item.id}>{item.content}</p>)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Paragraph;
