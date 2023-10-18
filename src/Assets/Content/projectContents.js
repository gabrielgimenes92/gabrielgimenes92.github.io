import placeHolderImage from "../Pictures/Rubber_duckies_So_many_ducks.jpg";
import everypage01 from "../Pictures/EveryPage-Feature01.png";
import everypage02 from "../Pictures/EveryPage-Feature02.png";
import everypage03 from "../Pictures/EveryPage-Feature03.png";
import everypageGallery01 from "../Pictures/everypageGallery01 - Splash.png";
import everypageGallery02 from "../Pictures/everypageGallery02 - Login.png";
import everypageGallery03 from "../Pictures/everypageGallery03 - My library.png";
import everypageGallery04 from "../Pictures/everypageGallery04 - Single view - Not Shared.png";
import everypageGallery05 from "../Pictures/everypageGallery05 - Wishlist- For Later.png";
import everypageGallery06 from "../Pictures/everypageGallery06 - Discover.png";
import everypageGallery07 from "../Pictures/everypageGallery07 - Community.png";
import everypageGallery08 from "../Pictures/everypageGallery08 - Profile.png";
import everypageGallery09 from "../Pictures/everypageGallery09 - Notification.png";
import everypageGallery10 from "../Pictures/everypageGallery10 - Notifications - Borrowing Book Confirmation.png";

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

const everypageLink01 = <a href="http://www.google.com">this link</a>;

export const everypageContents = {
  title: "everypage",
  //subtitle: "Never stop reading",
  headerPicture: "",
  mainContent: [
    {
      type: "custom",
      class: "video",
      content: everyPageVideo,
    },
    { type: "title", content: "The Problem" },
    {
      type: "paragraph",
      content:
        "EveryPage is a mobile app for book lovers who wish to keep track of their book collections at home as well as meeting other people in the nearby community to exchange books.",
    },
    {
      type: "paragraph",
      content:
        "The app provides an easy-to-use book inventory system allowing users to create their own virtual library where they can add custom information to help them remember the books. In addition, they can share their book collection with other nearby users and create a community where they can borrow and exchange books.",
    },

    {
      type: "techStack",
      content: [
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
    },

    { type: "title", content: "Main features" },
    { type: "subtitle", content: "ISBN Scanner" },

    {
      type: "text+image",
      content: [
        "Users can easily add books to their collection by scanning the ISBN barcode and adding manually. Once the book is added, users can personalise the book information, such as personal notes, photos and additional information to help them to organise the books.",
        everypage01,
      ],
    },
    { type: "subtitle", content: "Virtual Bookshelf On-The-Go" },
    {
      type: "image+text",
      content: [
        everypage02,
        "Users can access their virtual bookshelf anytime and anywhere. They can also keep track of the reading status, who borrow their books, or where they keep them. Users won’t need to worry if they buy duplicate copies or lose the books.",
      ],
    },
    { type: "subtitle", content: "Discover Books" },
    {
      type: "text+image",
      content: [
        "Users can share their books with other users by selecting the books they’re willing to share and tagging them as shareable. They can search for available books on the Discover page by book title or author, and nearby location. Users can check on the details of the book, add to their wishlist, and request to borrow the book.",
        everypage03,
      ],
    },
    // {
    //   type: "image",
    //   content: everypage01,
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
    // {
    //   type: "paragraph+link",
    //   content: "To learn more go to: ",
    //   link: everypageLink01,
    // },
  ],
  gallery: [
    {
      link: everypageGallery01,
      alt: "Place holder text",
    },
    {
      link: everypageGallery02,
      alt: "Place holder text",
    },
    {
      link: everypageGallery03,
      alt: "Place holder text",
    },
    {
      link: everypageGallery04,
      alt: "Place holder text",
    },
    {
      link: everypageGallery05,
      alt: "Place holder text",
    },
    {
      link: everypageGallery06,
      alt: "Place holder text",
    },
    {
      link: everypageGallery07,
      alt: "Place holder text",
    },
    {
      link: everypageGallery08,
      alt: "Place holder text",
    },
    {
      link: everypageGallery09,
      alt: "Place holder text",
    },
    {
      link: everypageGallery10,
      alt: "Place holder text",
    },
  ],
};

export const billyContents = {
  title: "Billy",
  headerPicture: "",
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
    { type: "title", content: "page under construction" },
    //   {
    //     type: "paragraph",
    //     content:
    //       "Every Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
    //   },
    //   {
    //     type: "image",
    //     content: placeHolderImage,
    //     alt: "Place holder text",
    //   },
    //   {
    //     type: "paragraph",
    //     content:
    //       "Every Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
    //   },
    //   {
    //     type: "paragraph",
    //     content:
    //       "Every Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores exercitationem sequi veniam nesciunt totam quisquam accusamus repudiandae? Quo quisquam, ducimus voluptatibus praesentium illo sit reprehenderit aut iusto vel aspernatur!",
    //   },
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
