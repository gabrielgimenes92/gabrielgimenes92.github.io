//Component that renders an image, a paragraph or more and a title, can be reversed (image on the left and text on the right).

import Image from 'next/image';
import React from 'react';
import styles from './TextAndImage.module.scss';

const TextAndImage = ({ title, paragraphs, image, invertSide }) => {
  if (invertSide) {
    return (
      <div className={styles.textAndImageWrapper}>
        <div className={styles.textAndImage}>
          <div>
            <Image
              src={image.source}
              width={500}
              height={500}
              alt={image.alt}
            />
          </div>
          <div>
            {title ? <h3>{title}</h3> : <></>}
            {paragraphs ? (
              paragraphs.map((item) => <p id={item.id}>{item.content}</p>)
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.textAndImageWrapper}>
      <div className={styles.textAndImage}>
        <div>
          {title ? <h3>{title}</h3> : <></>}
          {paragraphs ? (
            paragraphs.map((item) => <p id={item.id}>{item.content}</p>)
          ) : (
            <></>
          )}
        </div>
        <div>
          <Image src={image.source} width={500} height={500} alt={image.alt} />
        </div>
      </div>
    </div>
  );
};

export default TextAndImage;
