import placeHolderImage from "../Pictures/Rubber_duckies_So_many_ducks.jpg";
import everypage01 from "../Pictures/EveryPage-01.png";
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

let everyPageVideo = (
  <iframe
    title="Everypage Video"
    src="https://player.vimeo.com/video/777963265?h=b9658d9483"
    width="640"
    height="360"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
  ></iframe>
);

export const everypageContents = {
  title: "everypage",
  //subtitle: "Never stop reading",
  headerPicture: "",
  theProblem: [
    "EveryPage is a mobile app for book lovers who wish to keep track of their book collections at home as well as meeting other people in the nearby community to exchange books.",
    "The app provides an easy-to-use book inventory system allowing users to create their own virtual library where they can add custom information to help them remember the books. In addition, they can share their book collection with other nearby users and create a community where they can borrow and exchange books.",
  ],
  techStack: [
    {
      name: "React Native",
      logo: reactLogo,
    },
    {
      name: "NestJS",
      logo: nestJSLogo,
    },
    {
      name: "NativeBase",
      logo: nativeBaseLogo,
    },
    {
      name: "Firebase",
      logo: firebaseLogo,
    },
  ],
  mainContent: [
    { type: "title", content: "The App" },
    {
      type: "paragraph",
      content:
        "Every Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
    },
    {
      type: "text+image",
      content: [
        "Every Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
        everypage01,
      ],
    },
    {
      type: "custom",
      content: everyPageVideo,
    },
    // {
    //   type: "image",
    //   content: everypage01,
    //   alt: "Place holder text",
    // },
    {
      type: "paragraph",
      content:
        "Every Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
    },
    {
      type: "paragraph",
      content:
        "Every Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
    },
  ],
  gallery: [
    {
      link: placeHolderImage,
      alt: "Place holder text",
    },
    {
      link: placeHolderImage,
      alt: "Place holder text",
    },
    {
      link: placeHolderImage,
      alt: "Place holder text",
    },
    {
      link: placeHolderImage,
      alt: "Place holder text",
    },
    {
      link: placeHolderImage,
      alt: "Place holder text",
    },
    {
      link: placeHolderImage,
      alt: "Place holder text",
    },
  ],
};

export const billyContents = {
  title: "Billy",
  headerPicture: "",
  theProblem: [
    "Every Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
    "Every Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
  ],
  techStack: [
    {
      name: "React",
      logo: reactLogo,
    },
    {
      name: "NodeJs",
      logo: nodeJSLogo,
    },
    {
      name: "MUI",
      logo: muiLogo,
    },
    {
      name: "MongoDB",
      logo: mongoDBLogo,
    },
  ],
  mainContent: [
    {
      type: "paragraph",
      content:
        "Every Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
    },
    {
      type: "image",
      content: placeHolderImage,
      alt: "Place holder text",
    },
    {
      type: "paragraph",
      content:
        "Every Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
    },
    {
      type: "paragraph",
      content:
        "Every Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
    },
  ],
  gallery: [
    {
      link: placeHolderImage,
      alt: "Place holder text",
    },
    {
      link: placeHolderImage,
      alt: "Place holder text",
    },
    {
      link: placeHolderImage,
      alt: "Place holder text",
    },
    {
      link: placeHolderImage,
      alt: "Place holder text",
    },
    {
      link: placeHolderImage,
      alt: "Place holder text",
    },
    {
      link: placeHolderImage,
      alt: "Place holder text",
    },
  ],
};

export const abcContents = {
  title: "Adventure BC",
  headerPicture: "",
  theProblem: [
    "Every Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
    "Every Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
  ],
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
    {
      type: "paragraph",
      content:
        "Every Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
    },
    {
      type: "image",
      content: placeHolderImage,
      alt: "Place holder text",
    },
    {
      type: "paragraph",
      content:
        "Every Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
    },
    {
      type: "paragraph",
      content:
        "Every Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
    },
  ],
  gallery: [
    {
      link: placeHolderImage,
      alt: "Place holder text",
    },
    {
      link: placeHolderImage,
      alt: "Place holder text",
    },
    {
      link: placeHolderImage,
      alt: "Place holder text",
    },
    {
      link: placeHolderImage,
      alt: "Place holder text",
    },
    {
      link: placeHolderImage,
      alt: "Place holder text",
    },
    {
      link: placeHolderImage,
      alt: "Place holder text",
    },
  ],
};
