import React from 'react';
import SinglePageHero from '@/components/SinglePageHero';
import Buttons from '@/components/Buttons';
import styles from './page.module.scss';

import { pygameLogo, pythonLogo } from '../../../assets/logos';
import Image from 'next/image';
import Paragraph from '@/components/Paragraph';

const page = () => {
  let pygameTutorialGIF = '/pictures/pygame_tutorial.gif';
  let planetSurvivorGIF = '/pictures/planet_survivor.gif';

  let techStack = [
    {
      name: 'Python',
      logo: pythonLogo,
    },
    {
      name: 'PyGame',
      logo: pygameLogo,
    },
  ];

  let buttonFirstProject = [
    {
      text: 'Check the Code',
      href: 'https://github.com/gabrielgimenes92/pygame_tutorial',
    },
  ];

  let buttonSecondProject = [
    {
      text: 'Check the Code',
      href: 'https://github.com/gabrielgimenes92/planet_survivor',
    },
  ];

  let projectOneTitle = 'PyGame Tutorial';

  let projectOneParagraphsJSX = (
    <>
      <p>
        This first game was developed following a tutorial by Clear Code -{' '}
        <a href="https://www.youtube.com/watch?v=AY9MnQ4x3zk" target="blank">
          The ultimate introduction to Pygame.
        </a>{' '}
        It was a great opportunity to further develop my skills with Python 3
        and object-oriented languages.
      </p>
      <p>
        The game can be downloaded and only run locally, for more information on
        how to download and run the game, please check the code below.
      </p>
    </>
  );

  let projectTwoTitle = 'Planet Survivor';

  let projectTwoParagraphsJSX = (
    <>
      <p>
        After finishing the tutorial above I wished to test my skills in
        developing my own game. Planet Survivor is a shoot-them-up style game,
        the player controls the angle in which the base fires to destroy the
        targets before they reach the planet. As the time progresses the
        target's speed increases, making the game more and more challenging.
      </p>
      <p>
        I designed and developed the game, which can be downloaded and run
        locally. Click the button below for the repository with instructions on
        how to run it.
      </p>
    </>
  );

  return (
    <div>
      <SinglePageHero
        title="PyGames"
        subtitle=""
        techStack={techStack}
        stackWidth={'300px'}
      />
      <Paragraph
        title={projectOneTitle}
        paragraphsJSX={projectOneParagraphsJSX}
      />
      <Buttons buttons={buttonFirstProject} />
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={pygameTutorialGIF}
          width={1200}
          height={600}
          style={{ margin: '0 auto' }}
          alt="Task App running in a GIF"
        />
      </div>
      <Paragraph
        title={projectTwoTitle}
        paragraphsJSX={projectTwoParagraphsJSX}
      />
      <Buttons buttons={buttonSecondProject} />
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={planetSurvivorGIF}
          width={800}
          height={1100}
          style={{ margin: '0 auto' }}
          alt="Task App running in a GIF"
        />
      </div>
    </div>
  );
};

export default page;
