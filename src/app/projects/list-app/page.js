import React from 'react';
import Paragraph from '@/components/Paragraph';
import SinglePageHero from '@/components/SinglePageHero';
import TechStack from '@/components/TechStack';
import TextAndImage from '@/components/TextAndImage';

import {
  reactLogo,
  nestJSLogo,
  nativeBaseLogo,
  firebaseLogo,
} from '../../../assets/logos';

const page = () => {
  return (
    <div>
      <SinglePageHero title="List App" subtitle="" />
    </div>
  );
};

export default page;
