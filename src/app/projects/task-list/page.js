import React from 'react';
import Paragraph from '@/components/Paragraph';
import SinglePageHero from '@/components/SinglePageHero';
import TechStack from '@/components/TechStack';
import TextAndImage from '@/components/TextAndImage';
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
      text: 'GitHub - Frontend',
      href: 'https://github.com/gabrielgimenes92/list_frontend',
    },
    {
      text: 'GitHub - Backend',
      href: 'https://github.com/gabrielgimenes92/list_backend',
    },
  ];

  let introContent = [
    {
      id: '01',
      content:
        'Task list is a web app designed to help users track and manage their daily tasks. It provides a simple and straigh-forward interface for adding, editing, completing and deleting tasks. The list is persistent as the application has a frontend created on React, a backend on NodeJS with Express, and a database on MongoDB.',
    },
    // {
    //   id: '02',
    //   content:
    //     'As both the project manager and a developer in the team, I was actively involved in various crucial aspects of the project, including design decisions, data model creation, and technology stack selection. My primary focus was on the back-end, where I utilized NodeJS and Express to create robust and efficient APIs, while also working on the front-end with NextJS and CSS to ensure a seamless user experience.',
    // },
    // {
    //   id: '03',
    //   content:
    //     "Even though the project is no longer online, you can still access the source code in the project's GitHub repository. I primarily focused on making significant contributions to the 'dashboard' and invoice generation screens, alongside developing the promotional website.",
    // },
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
      name: 'mongoDB',
      logo: mongoDBWhiteLogo,
    },
  ];

  let theApplicationParagraph = {
    // title: 'The Application',
    paragraphs: [
      {
        id: '01',
        content:
          'The app was developed so I had a way to display some of my skills as a fullstack developer. Both front and backend are hosted and live, the former hosted on GitHub pages and the later on Render.',
      },
    ],
  };

  let nextStepsParagraph = {
    // title: 'The Application',
    paragraphs: [
      {
        id: '01',
        content:
          'As next steps I plan to add the edit functionality and the ability reorder those tasks within the list.',
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
      <Buttons buttons={buttons} />
      <Paragraph paragraphs={introContent} />
      {/* <TechStack techStack={techStack} /> */}
      <Paragraph
        // title={theApplicationParagraph.title}
        paragraphs={theApplicationParagraph.paragraphs}
      />
      <Paragraph
        // title={nextStepsParagraph.title}
        paragraphs={nextStepsParagraph.paragraphs}
      />
      {/* <h2>Main Features</h2> */}
      {/* <TextAndImage
        title={textAndImage01.title}
        paragraphs={textAndImage01.paragraphs}
        image={textAndImage01.image}
        />
        <TextAndImage
        title={textAndImage02.title}
        paragraphs={textAndImage02.paragraphs}
        image={textAndImage02.image}
        invertSide={true}
        />
        <TextAndImage
        title={textAndImage03.title}
        paragraphs={textAndImage03.paragraphs}
        image={textAndImage03.image}
        /> */}
      {/* <Paragraph paragraphs={finalParagraph} /> */}
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
