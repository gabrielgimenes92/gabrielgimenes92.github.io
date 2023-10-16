import placeHolderImage from "../Pictures/Rubber_duckies_So_many_ducks.jpg";
import everypage01 from "../Pictures/EveryPage-01.png";

const reactLogo = (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
    alt="React Logo"
  />
);
const javascriptLogo = (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    alt="Javascript Logo"
  />
);
const nodeJSLogo = (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
    alt="NodeJS Logo"
  />
);
// const githubLogo = (
//   <img
//     src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
//     alt="Typescript Logo"
//   />
// );
const typescriptLogo = (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
    alt="Typescript Logo"
  />
);
const nestJSLogo = (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg"
    alt="NestJS"
  />
);
const nativeBaseLogo = (
  <img
    src="https://nativebase.io/img/nativebase-logo-light.svg"
    alt="Native Base"
  />
);
const mongoDBLogo = (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
    alt="MongoDB"
  />
);
const muiLogo = <img src="https://mui.com/static/logo.png" alt="MUI" />;
const scssLogo = (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
    alt="SCSS"
  />
);
const firebaseLogo = (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg"
    alt="Firebase"
  />
);

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
