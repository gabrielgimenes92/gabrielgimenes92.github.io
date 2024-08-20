import React, { useEffect, useState } from 'react';
import styles from './SingleTech.module.scss';

const SingleTech = ({ name, logo }) => {
  const [hover, setHover] = useState(null);
  const [theStyle, setTheStyle] = useState({});

  const handleHover = (value) => {
    setHover(value);
  };

  useEffect(() => {
    console.log('inside useEffect');
    if (hover == 'true') {
      setTheStyle({
        display: 'block',
      });
    } else {
      setTheStyle({
        display: 'none',
      });
    }
  }, [hover]);

  return (
    <div className={styles.singleTech} key={name}>
      <div
        onMouseEnter={() => handleHover('true')}
        onMouseLeave={() => handleHover('false')}
      >
        {logo}
      </div>
      <p style={theStyle}>{name}</p>
    </div>
  );
};

export default SingleTech;
