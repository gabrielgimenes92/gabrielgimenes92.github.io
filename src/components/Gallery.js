import React from 'react';
import styles from './Gallery.module.scss';

const Gallery = ({ gallery }) => {
  let style = gallery.style;

  return (
    <div className={styles.galleryWrapper}>
      {gallery.images.map((image) => (
        <img src={image.source} alt={image.altText} style={style} />
      ))}
    </div>
  );
};

export default Gallery;
