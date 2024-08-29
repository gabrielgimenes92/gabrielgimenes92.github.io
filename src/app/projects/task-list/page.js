import React from 'react';
import Paragraph from '@/components/Paragraph';
import SinglePageHero from '@/components/SinglePageHero';
import Buttons from '@/components/Buttons';
import styles from './page.module.scss';

import {
  reactLogo,
  nodeJSLogo,
  muiLogo,
  mongoDBWhiteLogo,
  expressJSWhiteLogo,
  expressJSLogo,
  nodeJSWhiteLogo,
} from '../../../assets/logos';
import Image from 'next/image';
import Spacer from '@/components/Spacer';

const page = () => {
  let introGIF = '/pictures/listApp.gif';
  let featuredImage1 = '/pictures/Billy-Feature01.png';
  let featuredImage2 = '/pictures/Billy-Feature02.png';
  let featuredImage3 = '/pictures/Billy-Feature03.png';

  let buttons = [
    {
      text: 'Test the App',
      href: 'https://gabrielgimenes92.github.io/list_frontend/',
    },
    {
      text: 'Frontend Code',
      href: 'https://github.com/gabrielgimenes92/list_frontend',
    },
    {
      text: 'Backend Code',
      href: 'https://github.com/gabrielgimenes92/list_backend',
    },
  ];

  let techStack = [
    {
      name: 'React',
      logo: reactLogo,
    },
    {
      name: 'NodeJS',
      logo: nodeJSWhiteLogo,
    },
    {
      name: 'ExpressJS',
      logo: expressJSWhiteLogo,
    },
    {
      name: 'MongoDB',
      logo: mongoDBWhiteLogo,
    },
  ];

  let theApplicationParagraph = {
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

  let textAndImage01 = {
    title: 'Add New Tasks',
    paragraphs: [
      {
        id: '01',
        content:
          'Easily add new tasks with a simple form, ensuring that no important to-do is forgotten.',
      },
    ],
    image: {
      source: featuredImage1,
      alt: 'An alt description',
    },
  };

  let textAndImage02 = {
    title: 'Complete Tasks',
    paragraphs: [
      {
        id: '01',
        content:
          'Mark tasks as complete with a single click, helping users keep track of what has been accomplished.',
      },
    ],
    image: {
      source: featuredImage2,
      alt: 'An alt description',
    },
  };

  let textAndImage03 = {
    title: 'Edit Tasks',
    paragraphs: [
      {
        id: '01',
        content:
          'Edit the details of any task to keep information up-to-date and accurate.',
      },
    ],
    image: {
      source: featuredImage3,
      alt: 'An alt description',
    },
  };
  let textAndImage04 = {
    title: 'Delete Tasks',
    paragraphs: [
      {
        id: '01',
        content:
          'Remove tasks that are no longer relevant, keeping the task list clutter-free and organized.',
      },
    ],
    image: {
      source: featuredImage3,
      alt: 'An alt description',
    },
  };

  let finalParagraph = [
    {
      id: '01',
      content:
        'Task List provides a straightforward and user-friendly interface that makes managing tasks simple and efficient. Its clean design and intuitive functionalities help users stay productive and organized, ensuring that nothing falls through the cracks.',
    },
  ];

  return (
    <div>
      <SinglePageHero title="Task List" subtitle="" techStack={techStack} />
      <Spacer />
      <Buttons buttons={buttons} />
      <Paragraph paragraphs={theApplicationParagraph.paragraphs} />
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={introGIF}
          width={765}
          height={600}
          style={{ margin: '0 auto', maxWidth: '100%' }}
          alt="Task App running in a GIF"
        />
      </div>
    </div>
  );
};

export default page;
