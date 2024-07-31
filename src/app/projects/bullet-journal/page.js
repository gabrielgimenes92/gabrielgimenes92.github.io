import React from 'react';
import Paragraph from '@/components/Paragraph';
import SinglePageHero from '@/components/SinglePageHero';
import TechStack from '@/components/TechStack';
import TextAndImage from '@/components/TextAndImage';
import Buttons from '@/components/Buttons';

import {
  reactLogo,
  nodeJSLogo,
  muiLogo,
  mongoDBLogo,
} from '../../../assets/logos';

const page = () => {
  let featuredImage1 = '/pictures/Billy-Feature01.png';
  let featuredImage2 = '/pictures/Billy-Feature02.png';
  let featuredImage3 = '/pictures/Billy-Feature03.png';

  let buttons = [
    {
      text: 'GitHub',
      href: 'https://github.com/gabrielgimenes92/planner_frontend',
    },
  ];

  let introContent = [
    {
      id: '01',
      content:
        'Bullet Journal is an online platform designed to help users keep track of their daily tasks, set and manage recurring goals through a habit tracker, and maintain a space for personal journaling. This digital bullet journal brings the traditional bullet journaling experience to the web, providing a comprehensive tool for staying organized and productive.',
    },
    {
      id: '02',
      content:
        'As the sole developer of this project, I was responsible for all aspects of its development. This included making design decisions, creating data models, and selecting the technology stack. My primary contributions were on the front-end, where I utilized NextJS and SASS to build a responsive and visually appealing user interface.',
    },
    {
      id: '03',
      content:
        'The project is currently online and hosted on GitHub Pages. My main focus was on developing the task and habit management functionalities, as well as the user interface design and the promotional website.',
    },
  ];

  let techStack = [
    {
      name: 'React',
      logo: reactLogo,
    },
    {
      name: 'NodeJS',
      logo: nodeJSLogo,
    },
    {
      name: 'MUI',
      logo: muiLogo,
    },
    {
      name: 'mongoDB',
      logo: mongoDBLogo,
    },
  ];

  let theApplicationParagraph = {
    title: 'The Application',
    paragraphs: [
      {
        id: '01',
        content:
          'Bullet Journal is a web application that offers a structured and flexible approach to managing daily tasks, tracking habits, and journaling. Users can create, complete, edit, and push tasks to the next day, as well as set up and track habits over time.',
      },
    ],
  };

  let textAndImage01 = {
    title: 'Task Management:',
    paragraphs: [
      {
        id: '01',
        content:
          'Easily add, complete, edit, and push tasks to the next day, ensuring that users stay on top of their daily to-dos.',
      },
    ],
    image: {
      source: featuredImage1,
      alt: 'An alt description',
    },
  };

  let textAndImage02 = {
    title: 'Habit Tracker',
    paragraphs: [
      {
        id: '01',
        content:
          'Create, edit, and delete habits, and track progress through a visual calendar, helping users establish and maintain good habits.',
      },
    ],
    image: {
      source: featuredImage2,
      alt: 'An alt description',
    },
  };

  let textAndImage03 = {
    title: 'Journaling Space',
    paragraphs: [
      {
        id: '01',
        content:
          'Maintain a personal journal to document thoughts, reflections, and daily experiences.',
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
        'Bullet Journal provides a seamless and user-friendly interface that combines task management, habit tracking, and journaling into one cohesive platform. Its clean design and intuitive features help users stay organized, set and achieve their goals, and reflect on their daily lives.',
    },
  ];

  return (
    <div>
      <SinglePageHero title="Bullet Journal" subtitle="" />
      <Buttons buttons={buttons} />
      <Paragraph paragraphs={introContent} />
      <TechStack techStack={techStack} />
      <Paragraph
        title={theApplicationParagraph.title}
        paragraphs={theApplicationParagraph.paragraphs}
      />
      <h2>Main Features</h2>
      <TextAndImage
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
      />
      <Paragraph paragraphs={finalParagraph} />
    </div>
  );
};

export default page;
