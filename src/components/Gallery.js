import React from 'react';
import styles from './Gallery.module.scss';

const Gallery = ({ gallery }) => {
  let style = gallery.style;

  return (
    <div className={styles.galleryWrapper}>
      <h1 style={{ margin: '1rem 0' }}>Gallery</h1>
      <div className={styles.gallery}>
        {gallery.images.map((image) => (
          <img
            key={image.id}
            src={image.source}
            alt={image.altText}
            style={style}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
