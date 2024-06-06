
import billy01 from "../Pictures/Billy-Feature01.png";
import billy02 from "../Pictures/Billy-Feature02.png";
import billy03 from "../Pictures/Billy-Feature03.png";
import billyGallery01 from "../Pictures/Billy-Desktop-Add New Invoice.png";
import billyGallery02 from "../Pictures/Billy-Desktop-All Invoice.png";
import billyGallery03 from "../Pictures/Billy-Desktop-Dashboard - new user.png";
import billyGallery04 from "../Pictures/Billy-Desktop-Dashboard-existing user.png";
import billyGallery05 from "../Pictures/Billy-Desktop-Login.png";
import billyGallery06 from "../Pictures/Billy-Desktop-Preview.png";
import billyProposalPDF from "../PDF/Proposal Billy.pdf";

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

export const billyContents = {
    title: "Billy",
    subtitle: "Your Smart Invoicing Friend",
    headerPicture: "",
    mainContent: [
      {
        type: "links",
        content: [
          {
            link: "https://github.com/mercury-squad",
            label: "GitHub",
          },
          {
            link: billyProposalPDF,
            label: "App Proposal",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Billy is a web platform which helps freelancers and small business owners to create professional digital invoices and managing business finances by generating invoices and tracking income",
      },
      {
        type: "paragraph",
        content:
          "As a project manager and developer in our team, I was hands-on in key project areas. This involved making design choices, creating data models, and picking the tech stack. I mainly worked on the front-end, using React and blending in the MUI library.",
      },
      {
        type: "paragraph",
        content:
          "Even though the project is no longer online, you can still access the source code in the project's GitHub repository. I primarily focused on making significant contributions to the 'dashboard' and invoice generation screens, alongside developing the promotional website.",
      },
      {
        type: "techStack",
        content: [
          {
            name: "React",
            logo: reactLogo,
          },
          {
            name: "NodeJS",
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
      },
      { type: "title", content: "The Application" },
      {
        type: "paragraph",
        content:
          "Billy is a web platform where freelancers and small business owner can generate professional invoices in a fast and intuitive way while having control of the finances related to their business by tracking invoices and payments in a project.",
      },
      { type: "title", content: "Main features" },
  
      {
        type: "text+image",
        content: [
          "Generate and schedule invoice quickly",
          "Create a professional invoice in seconds, download it as a pdf and send it to the customers or schedule a recurring invoice.",
          billy01,
        ],
      },
  
      {
        type: "image+text",
        content: [
          billy02,
          "Track your payment status",
          "Update your projects and invoices page and easily keep an eye on pending and overdue payments.",
        ],
      },
      {
        type: "text+image",
        content: [
          "Manage business income and expense",
          "Manage all projects, clients, and invoices in one place. Get the report of your business income and expense easily.",
          billy03,
        ],
      },
    ],
    gallery: [
      {
        link: billyGallery05,
        alt: "Login",
      },
      {
        link: billyGallery04,
        alt: "Dashboard",
      },
      {
        link: billyGallery02,
        alt: "Invoices",
      },
      {
        link: billyGallery01,
        alt: "New invoice",
      },
      {
        link: billyGallery06,
        alt: "Invoice visualization",
      },
      {
        link: billyGallery03,
        alt: "Dashboard of a new user",
      },
    ],
  };