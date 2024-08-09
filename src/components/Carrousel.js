'use client';

import React, { useEffect, useState } from 'react';
import styles from './Carrousel.module.scss';

const Carrousel = ({ gallery }) => {
  let [previousImage, setPreviousImage] = useState(0);
  let [selectedImage, setSelectedImage] = useState(1);
  let [nextImage, setNextImage] = useState(2);

  let gallerySize = gallery.images.length - 1;

  useEffect(() => {
    setImages();
  }, [selectedImage]);

  const handleChangeImage = (event) => {
    let finalValue;

    switch (event.target.id) {
      case 'minus':
        finalValue = selectedImage - 1;
        if (finalValue < 0) {
          setSelectedImage(gallerySize);
        } else {
          setSelectedImage(finalValue);
        }
        break;

      case 'plus':
        finalValue = selectedImage + 1;
        if (finalValue > gallerySize) {
          finalValue = 0;
        }
        setSelectedImage(finalValue);
        break;
    }
  };

  const setImages = () => {
    if (selectedImage == 0) {
      setPreviousImage(gallerySize);
      setNextImage(selectedImage + 1);
    } else if (selectedImage == gallerySize) {
      setPreviousImage(selectedImage - 1);
      setNextImage(0);
    } else {
      setPreviousImage(selectedImage - 1);
      setNextImage(selectedImage + 1);
    }
  };

  return (
    <div>
      <h1 style={{ margin: '1rem 0' }}>Gallery</h1>
      <div className={styles.gallery}>
        <button id="minus" onClick={handleChangeImage}>
          &lt;
        </button>
        <img
          className={styles.previousImage}
          src={gallery.images[previousImage].source}
        />
        <img src={gallery.images[selectedImage].source} />
        <img
          className={styles.nextImage}
          src={gallery.images[nextImage].source}
        />
        <button id="plus" onClick={handleChangeImage}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carrousel;
