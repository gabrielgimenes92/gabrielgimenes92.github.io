import Paragraph from '@/components/Paragraph';
import SinglePageHero from '@/components/SinglePageHero';
import TechStack from '@/components/TechStack';
import TextAndImage from '@/components/TextAndImage';
import React from 'react';

const page = () => {
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
    content: [
      {
        id: '01',
        content:
          'The Application Paragraph 01 Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit aliquid nulla dolorem minima sed ratione vel alias, dolore corrupti, doloremque odit commodi voluptates libero a, necessitatibus perferendis voluptas! Voluptates?',
      },
    ],
  };

  return (
    <div>
      <h1>This is Everypage</h1>
      <SinglePageHero title="Everypage" />
      <Paragraph content={introContent} />
      <TechStack />
      <Paragraph
        title={theApplicationParagraph.title}
        content={theApplicationParagraph.content}
      />
      <TextAndImage />
    </div>
  );
};

export default page;
