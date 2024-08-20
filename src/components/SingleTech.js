import React, { useEffect, useState } from 'react';
import styles from './SingleTech.module.scss';

const SingleTech = ({ name, logo }) => {
  const [hover, setHover] = useState(null);
  const [hoverStyle, setHoverStyle] = useState({
    height: '0',
    overflow: 'hidden',
  });

  const handleHover = (value) => {
    setHover(value);
  };

  useEffect(() => {
    console.log('inside useEffect');
    if (hover == 'true') {
      setHoverStyle({
        color: 'white',
        height: '1rem',
        width: '100%',
        display: 'block',
        position: 'absolute',
        // backgroundColor: 'blue',
        textAlign: 'center',
        left: '0%',
        top: '110%',
        transition: 'height 0.5s',
        overflow: 'show',
      });
    } else {
      setHoverStyle({
        height: '0',
        overflow: 'hidden',
        textAlign: 'center',
        width: '100%',
        color: 'white',
        display: 'block',
        position: 'absolute',
        left: '0%',
        top: '110%',
        transition: 'height 0.5s',
      });
    }
  }, [hover]);

  return (
    <div className={styles.singleTech} key={name}>
      <span
        onMouseEnter={() => handleHover('true')}
        onMouseLeave={() => handleHover('false')}
      >
        {logo}
      </span>
      <p style={hoverStyle}>{name}</p>
    </div>
  );
};

export default SingleTech;
