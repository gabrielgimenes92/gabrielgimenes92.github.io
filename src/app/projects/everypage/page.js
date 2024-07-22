import Paragraph from '@/components/Paragraph';
import SinglePageHero from '@/components/SinglePageHero';
import TechStack from '@/components/TechStack';
import TextAndImage from '@/components/TextAndImage';
import React from 'react';

const page = () => {
  let everypageFeaturedImage1 = '/pictures/EveryPage-Feature01.png';
  let everypageFeaturedImage2 = '/pictures/EveryPage-Feature02.png';
  let everypageFeaturedImage3 = '/pictures/EveryPage-Feature03.png';
  let introContent = [
    {
      id: '01',
      content:
        'Intro Content 01 Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit aliquid nulla dolorem minima sed ratione vel alias, dolore corrupti, doloremque odit commodi voluptates libero a, necessitatibus perferendis voluptas! Voluptates?',
    },
    {
      id: '02',
      content:
        'Intro Content 02 Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit aliquid nulla dolorem minima sed ratione vel alias, dolore corrupti, doloremque odit commodi voluptates libero a, necessitatibus perferendis voluptas! Voluptates?',
    },
  ];

  let theApplicationParagraph = {
    title: 'The Application',
    paragraphs: [
      {
        id: '01',
        content:
          'The Application Paragraph 01 Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit aliquid nulla dolorem minima sed ratione vel alias, dolore corrupti, doloremque odit commodi voluptates libero a, necessitatibus perferendis voluptas! Voluptates?',
      },
    ],
  };

  let textAndImage01 = {
    title: 'First image',
    paragraphs: [
      {
        id: '01',
        content:
          'Paragraph with image Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit aliquid nulla dolorem minima sed ratione vel alias, dolore corrupti, doloremque odit commodi voluptates libero a, necessitatibus perferendis voluptas! Voluptates?',
      },
    ],
    image: {
      source: everypageFeaturedImage1,
      alt: 'An alt description',
    },
  };

  let textAndImage02 = {
    title: 'First image',
    paragraphs: [
      {
        id: '01',
        content:
          'Paragraph with image Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit aliquid nulla dolorem minima sed ratione vel alias, dolore corrupti, doloremque odit commodi voluptates libero a, necessitatibus perferendis voluptas! Voluptates?',
      },
    ],
    image: {
      source: everypageFeaturedImage2,
      alt: 'An alt description',
    },
  };

  let textAndImage03 = {
    title: 'First image',
    paragraphs: [
      {
        id: '01',
        content:
          'Paragraph with image Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit aliquid nulla dolorem minima sed ratione vel alias, dolore corrupti, doloremque odit commodi voluptates libero a, necessitatibus perferendis voluptas! Voluptates?',
      },
    ],
    image: {
      source: everypageFeaturedImage3,
      alt: 'An alt description',
    },
  };

  return (
    <div>
      <h1>This is Everypage</h1>
      <SinglePageHero title="Everypage" />
      <Paragraph content={introContent} />
      <TechStack />
      <Paragraph
        title={theApplicationParagraph.title}
        paragraphs={theApplicationParagraph.paragraphs}
      />
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
    </div>
  );
};

export default page;
