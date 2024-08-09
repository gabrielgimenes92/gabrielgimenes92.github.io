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
import Carrousel from '@/components/Carrousel';

const page = () => {
  let featuredImage1 = '/pictures/Billy-Feature01.png';
  let featuredImage2 = '/pictures/Billy-Feature02.png';
  let featuredImage3 = '/pictures/Billy-Feature03.png';

  let buttons = [
    {
      text: 'GitHub',
      href: 'https://github.com/mercury-squad',
    },
    {
      text: 'App Proposal',
      href: '/pdfs/Proposal Billy.pdf',
    },
  ];

  let introContent = [
    {
      id: '01',
      content:
        'Billy is a web platform which helps freelancers and small business owners to create professional digital invoices and managing business finances by generating invoices and tracking income.',
    },
    {
      id: '02',
      content:
        'As a project manager and developer in our team, I was hands-on in key project areas. This involved making design choices, creating data models, and picking the tech stack. I mainly worked on the front-end, using React and blending in the MUI library.',
    },
    {
      id: '03',
      content:
        "Even though the project is no longer online, you can still access the source code in the project's GitHub repository. I primarily focused on making significant contributions to the 'dashboard' and invoice generation screens, alongside developing the promotional website.",
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
          'Billy is a web platform where freelancers and small business owner can generate professional invoices in a fast and intuitive way while having control of the finances related to their business by tracking invoices and payments in a project.',
      },
    ],
  };

  let textAndImage01 = {
    title: 'Generate and schedule invoice quickly',
    paragraphs: [
      {
        id: '01',
        content:
          'Create a professional invoice in seconds, download it as a pdf and send it to the customers or schedule a recurring invoice.',
      },
    ],
    image: {
      source: featuredImage1,
      alt: 'An alt description',
    },
  };

  let textAndImage02 = {
    title: 'Track your payment status',
    paragraphs: [
      {
        id: '01',
        content:
          'Update your projects and invoices page and easily keep an eye on pending and overdue payments.',
      },
    ],
    image: {
      source: featuredImage2,
      alt: 'An alt description',
    },
  };

  let textAndImage03 = {
    title: 'Manage business income and expense',
    paragraphs: [
      {
        id: '01',
        content:
          'Manage all projects, clients, and invoices in one place. Get the report of your business income and expense easily.',
      },
    ],
    image: {
      source: featuredImage3,
      alt: 'An alt description',
    },
  };

  let gallery = {
    style: {
      // aspectRatio: '9 / 16',
      width: '100%',
      // maxHeight: '600px',
      // overflow: 'hidden',
      objectFit: 'cover',
      // border: '1px solid black',
      // borderRadius: '6px',
    },
    images: [
      {
        id: 1,
        source: '/pictures/EveryPageGallery/everypageGallery01 - Splash.png',
        altText: 'Splash Screen',
      },
      {
        id: 2,
        source: '/pictures/EveryPageGallery/everypageGallery02 - Login.png',
        altText: 'Login',
      },
      {
        id: 3,
        source:
          '/pictures/EveryPageGallery/everypageGallery03 - My library.png',
        altText: 'My Library',
      },
      {
        id: 4,
        source:
          '/pictures/EveryPageGallery/everypageGallery04 - Single view - Not Shared.png',
        altText: 'Book Single View',
      },
      {
        id: 5,
        source:
          '/pictures/EveryPageGallery/everypageGallery05 - Wishlist- For Later.png',
        altText: 'Wishlist',
      },
      {
        id: 6,
        source: '/pictures/EveryPageGallery/everypageGallery06 - Discover.png',
        altText: 'Discover',
      },
      {
        id: 7,
        source: '/pictures/EveryPageGallery/everypageGallery07 - Community.png',
        altText: 'Community',
      },
      {
        id: 8,
        source: '/pictures/EveryPageGallery/everypageGallery08 - Profile.png',
        altText: 'Profile',
      },
      {
        id: 9,
        source:
          '/pictures/EveryPageGallery/everypageGallery09 - Notification.png',
        altText: 'Notification',
      },
    ],
  };

  return (
    <div>
      <SinglePageHero title="Billy" subtitle="Your Smart Invoicing Friend" />
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
      <Carrousel gallery={gallery} />
    </div>
  );
};

export default page;
