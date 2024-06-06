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
import everypageGallery11 from "../Pictures/everypageGallery11 - Website.png";
import everypageProposalPDF from "../PDF/EveryPageProposal_Fin.pdf";

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
    title: "EveryPage",
    headerPicture: "",
    mainContent: [
      {
        type: "links",
        content: [
          {
            link: "https://github.com/orgs/Team-Ditto/repositories",
            label: "GitHub",
          },
          {
            link: everypageProposalPDF,
            label: "App Proposal",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "EveryPage is a mobile application created during post degree diploma at Langara College, serving as our final project. This endeavor replicates a professional work environment, encompassing a collaborative effort with designers, developers, and a project manager. It strictly adheres to agile methodology and its associated practices.",
      },
      {
        type: "paragraph",
        content:
          "In my dual role as a project manager and a developer within the team, I actively participated in critical aspects of the project, including design decision-making, data model creation, and the selection of the technological stack, among other responsibilities. My primary focus as a developer was on front-end, utilizing React Native, integrating the Native Base library, and conducting testing through Expo.",
      },
      {
        type: "paragraph",
        content:
          "While the project is no longer available online, the source code is still accessible on the project's GitHub repository. My substantial contributions were concentrated in the 'wishlist' and 'notifications' screens, as well as the development of the promotional website.",
      },
      {
        type: "custom",
        class: "video",
        content: everyPageVideo,
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
      { type: "title", content: "The Application" },
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
  
      { type: "title", content: "Main features" },
  
      {
        type: "text+image",
        content: [
          "ISBN Scanner",
          "Users can easily add books to their collection by scanning the ISBN barcode and adding manually. Once the book is added, users can personalise the book information, such as personal notes, photos and additional information to help them to organise the books.",
          everypage01,
        ],
      },
  
      {
        type: "image+text",
        content: [
          everypage02,
          "Virtual Bookshelf On-The-Go",
          "Users can access their virtual bookshelf anytime and anywhere. They can also keep track of the reading status, who borrow their books, or where they keep them. Users won’t need to worry if they buy duplicate copies or lose the books.",
        ],
      },
      {
        type: "text+image",
        content: [
          "Discover Books",
          "Users can share their books with other users by selecting the books they’re willing to share and tagging them as shareable. They can search for available books on the Discover page by book title or author, and nearby location. Users can check on the details of the book, add to their wishlist, and request to borrow the book.",
          everypage03,
        ],
      },
    ],
    gallery: [
      {
        link: everypageGallery01,
        alt: "Splash screen",
      },
      {
        link: everypageGallery02,
        alt: "Login screen",
      },
      {
        link: everypageGallery03,
        alt: "My library tab",
      },
      {
        link: everypageGallery04,
        alt: "Selected book single page",
      },
      {
        link: everypageGallery05,
        alt: "Wishlist tab",
      },
      {
        link: everypageGallery06,
        alt: "Discover tab",
      },
      {
        link: everypageGallery07,
        alt: "Community tab",
      },
      {
        link: everypageGallery08,
        alt: "Profile tab",
      },
      {
        link: everypageGallery09,
        alt: "Notifications page",
      },
      {
        link: everypageGallery10,
        alt: "Conversation with another user",
      },
      {
        link: everypageGallery11,
        alt: "Website",
      },
    ],
  };