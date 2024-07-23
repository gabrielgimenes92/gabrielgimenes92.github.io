import React from 'react';
import styles from './Buttons.module.scss';
import Link from 'next/link';

const Buttons = ({ buttons }) => {
  return (
    <div className={styles.buttonsWrapper}>
      <div className={styles.buttons}>
        {buttons.map((button) => (
          <Link href={button.href} className={styles.button}>
            {button.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Buttons;
