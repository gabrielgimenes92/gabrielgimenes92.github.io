//Component to create a paragraph, can have a title or not, h1 or h2.

import React from 'react';
import styles from './Paragraph.module.scss';

const Paragraph = ({ title, paragraphs, paragraphsJSX }) => {
  return (
    <div className={styles.paragraphWrapper}>
      <div className={styles.paragraph}>
        {title ? <h2 style={{ marginTop: '1rem' }}>{title}</h2> : <></>}
        {paragraphsJSX}
        {paragraphs ? (
          paragraphs.map((item) => (
            <p id={item.id} key={item.id}>
              {item.content}
            </p>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Paragraph;
