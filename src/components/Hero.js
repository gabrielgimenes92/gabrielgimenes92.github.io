import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import styles from './Hero.module.scss';
import React from 'react';
import bg from '../../public/pictures/DSCF9483.jpg';
import { nextJSLogoSmall } from '@/assets/logos';

const Hero = () => {
  const reactLogo = <FontAwesomeIcon icon={faReact} />;
  const javascriptLogo = <FontAwesomeIcon icon={faSquareJs} />;

  return (
    <section className={styles.home}>
      <div className={styles.ball1} />
      <div className={styles.ball2} />
      <div className={styles.ball3} />
      <div className={styles.introduction}>
        <div
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
          className={styles.profilePicture}
        />
        <div className={styles.profileText}>
          <p>Hi, my name is</p>
          <p className={styles.biggest}>
            <spam className={styles.light}>&#123;</spam> Gabriel Gimenes{' '}
            <spam className={styles.light}>&#125;</spam>
          </p>
          <p className={styles.bigger}>Junior front end developer</p>
          <div className={styles.heroSkills}>
            <div>
              <p>{javascriptLogo}</p>
              <p>JavaScript</p>
            </div>
            <div>
              <p>{reactLogo}</p>
              <p>React</p>
            </div>
            <div>
              <p>{nextJSLogoSmall}</p>
              <p className={styles.nextJS}>
                NEXT.<spam className={styles.smaller}>JS</spam>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
