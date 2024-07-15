import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import styles from './Hero.module.scss';
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  const reactLogo = <FontAwesomeIcon icon={faReact} />;
  const javascriptLogo = <FontAwesomeIcon icon={faSquareJs} />;

  return (
    <section className={styles.home}>
      <div className="ball1" />
      <div className="ball2" />
      <div className="ball3" />
      <div className={styles.introduction}>
        <Image
          src="/pictures/DSCF9483.jpg"
          width={500}
          height={500}
          alt="hi"
          className={styles.profilePicture}
        />
        <div className={styles.profileText}>
          <p>Hi, my name is</p>
          <p className={styles.biggest}>
            <spam className={styles.light}>&#123;</spam> Gabriel Gimenes{' '}
            <spam className={styles.light}>&#125;</spam>
          </p>
          <p className={styles.bigger}>
            Junior frontend <spam className={styles.light}>/</spam> mobile
            developer
          </p>
          <div className={styles.heroSkills}>
            <div>
              <p>{javascriptLogo}</p>
              <p>JavaScript</p>
            </div>
            <div>
              <p>{reactLogo}</p>
              <p>React & React Native</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
