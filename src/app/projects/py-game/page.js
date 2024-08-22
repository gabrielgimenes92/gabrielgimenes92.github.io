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

  // let projectOne = {
  //   title: 'Title',
  //   paragraphs: [
  //     {
  //       id: '01',
  //       content:
  //         'Task list is a web app designed to help users track and manage their daily tasks. It provides a straightforward interface for adding, editing, completing, and deleting tasks. The list is persistent as the application has a frontend created on React, a backend on NodeJS with Express, and a database on MongoDB.',
  //     },
  //     {
  //       id: '02',
  //       content:
  //         'The app was developed so I could display some of my skills as a full-stack developer. Both front and backend are hosted and live, the former hosted on GitHub pages and the latter on Render.',
  //     },
  //     {
  //       id: '03',
  //       content:
  //         'As the next step, I plan to add edit functionality and the ability to reorder tasks from the list.',
  //     },
  //   ],
  // };

  let projectTwo = {
    title: 'Title',
    paragraphs: [
      {
        id: '01',
        content:
          'Task list is a web app designed to help users track and manage their daily tasks. It provides a straightforward interface for adding, editing, completing, and deleting tasks. The list is persistent as the application has a frontend created on React, a backend on NodeJS with Express, and a database on MongoDB.',
      },
      {
        id: '02',
        content:
          'The app was developed so I could display some of my skills as a full-stack developer. Both front and backend are hosted and live, the former hosted on GitHub pages and the latter on Render.',
      },
      {
        id: '03',
        content:
          'As the next step, I plan to add edit functionality and the ability to reorder tasks from the list.',
      },
    ],
  };

  let projectOneTitle = 'Title1';

  let projectOneParagraphsJSX = (
    <>
      <p>
        1Task list is a web app designed to help users track and manage their
        daily tasks. It provides a straightforward interface for adding,
        editing, completing, and deleting tasks. The list is persistent as the
        application has a frontend created on React, a backend on NodeJS with
        Express, and a database on MongoDB.
      </p>
      <p>
        The app was developed so I could display some of my skills as a
        full-stack developer. Both front and backend are hosted and live, the
        former hosted on GitHub pages and the latter on Render.
      </p>
      <p>
        As the next step, I plan to add edit functionality and the ability to
        reorder tasks from the list.
      </p>
    </>
  );

  let projectTwoTitle = 'Title2';

  let projectTwoParagraphsJSX = (
    <>
      <p>
        2Task list is a web app designed to help users track and manage their
        daily tasks. It provides a straightforward interface for adding,
        editing, completing, and deleting tasks. The list is persistent as the
        application has a frontend created on React, a backend on NodeJS with
        Express, and a database on MongoDB.
      </p>
      <p>
        The app was developed so I could display some of my skills as a
        full-stack developer. Both front and backend are hosted and live, the
        former hosted on GitHub pages and the latter on Render.
      </p>
      <p>
        As the next step, I plan to add edit functionality and the ability to
        reorder tasks from the list.
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
