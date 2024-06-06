import placeHolderImage from "../Pictures/Rubber_duckies_So_many_ducks.jpg";

import {
  reactLogo,
  javascriptLogo,
  nodeJSLogo,
  nestJSLogo,
  nativeBaseLogo,
  mongoDBLogo,
  muiLogo,
  scssLogo,
  firebaseLogo,
} from "./logos";

export const emptyContents = {
  title: "",
  problem: "",
  headerPicture: "",
  paragraph1: "",
  img1: "",
};

export const underConstructionContents = {
  title: "This is still under construction",
  problem:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, culpa. Unde obcaecati cumque neque animi nostrum, aperiam repellendus error sequi!",
  headerPicture: "",
  paragraph1:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
  img1: "",
};


export const abcContents = {
  title: "Adventure BC",
  headerPicture: "",
  techStack: [
    {
      name: "JavaScript",
      logo: javascriptLogo,
    },
    {
      name: "SCSS",
      logo: scssLogo,
    },
    {
      name: "Firebase",
      logo: firebaseLogo,
    },
  ],
  mainContent: [
    { type: "title", content: "page under construction" },

    // {
    //   type: "paragraph",
    //   content:
    //     "Every Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
    // },
    // {
    //   type: "image",
    //   content: placeHolderImage,
    //   alt: "Place holder text",
    // },
    // {
    //   type: "paragraph",
    //   content:
    //     "Every Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
    // },
    // {
    //   type: "paragraph",
    //   content:
    //     "Every Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
    // },
  ],
  // gallery: [
  //   {
  //     link: placeHolderImage,
  //     alt: "Place holder text",
  //   },
  //   {
  //     link: placeHolderImage,
  //     alt: "Place holder text",
  //   },
  //   {
  //     link: placeHolderImage,
  //     alt: "Place holder text",
  //   },
  //   {
  //     link: placeHolderImage,
  //     alt: "Place holder text",
  //   },
  //   {
  //     link: placeHolderImage,
  //     alt: "Place holder text",
  //   },
  //   {
  //     link: placeHolderImage,
  //     alt: "Place holder text",
  //   },
  // ],
};
