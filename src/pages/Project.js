import React, { useState } from "react";
import Header from "../Layouts/Header";
import { useParams } from "react-router-dom";
import Footer from "../Layouts/Footer";
import {
  underConstructionContents,
  everypageContents,
  billyContents,
  abcContents,
} from "../Assets/Content/projectContents";

const ProjectPage = (props) => {
  let [fullscreenGallery, setFullscreenGallery] = useState(false);
  let [currentImageForGallery, setCurrentImageForGallery] = useState({
    link: "",
    alt: "",
  });
  const { id } = useParams();

  let project;
  if (id === "everypage") {
    project = everypageContents;
  } else if (id === "billy") {
    project = billyContents;
  } else if (id === "adventurebc") {
    project = abcContents;
  } else {
    project = underConstructionContents;
  }

  const handleOpenGallery = (event, key) => {
    console.log("The key is: " + key);
    let image = project.gallery[key];
    setCurrentImageForGallery(image);
    setFullscreenGallery(true);
  };

  const handleCloseGallery = () => {
    setFullscreenGallery(false);
  };

  return (
    <div className="projectPage">
      {fullscreenGallery ? (
        <div className="fullscreenGalleryWrapper">
          <div className="fullscreenGallery" onClick={handleCloseGallery}>
            <div className="imageBlock">
              {/* <div className="imageScroll"> */}
              <img
                src={currentImageForGallery.link}
                alt={currentImageForGallery.alt}
              />
              {/* </div> */}
              <p>{currentImageForGallery.alt}</p>
            </div>
            <p className="info">Click anywhere to close</p>
          </div>
        </div>
      ) : (
        <></>
      )}
      <Header />
      <div className="projectHeaderWrapper home">
        <div className="ball1" />
        <div className="ball2" />
        <div className="ball3" />
        <div className="projectHeader">
          <h1>{project.title}</h1>
          {project.subtitle ? <h2>{project.subtitle}</h2> : <></>}
        </div>
      </div>
      <div className="projectContent">
        {project.theProblem && project.theProblem.length > 0 ? (
          <div>
            <h2>The Problem</h2>
            <div>
              {project.theProblem.map((paragraph) => (
                <p>{paragraph}</p>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}

        {project.mainContent && project.mainContent.length > 0 ? (
          <div className="projectMainContent">
            {project.mainContent.map((content) => {
              if (content.type === "title") {
                return <h2>{content.content}</h2>;
              } else if (content.type === "subtitle") {
                return <h3>{content.content}</h3>;
              } else if (content.type === "paragraph") {
                return <p>{content.content}</p>;
              } else if (content.type === "image") {
                return <img src={content.content} alt={content.alt} />;
              } else if (content.type === "image+text") {
                return (
                  <div className="projectTextImage">
                    <img src={content.content[0]} alt={content.alt} />

                    <div className="projectTextImageTitle">
                      <h3>{content.content[1]}</h3>
                      <p>{content.content[2]}</p>
                    </div>
                  </div>
                );
              } else if (content.type === "text+image") {
                return (
                  <div className="projectTextImage">
                    <div className="projectTextImageTitle">
                      <h3>{content.content[0]}</h3>
                      <p>{content.content[1]}</p>
                    </div>
                    <img src={content.content[2]} alt={content.alt} />
                  </div>
                );
              } else if (content.type === "custom") {
                return <div className={content.class}>{content.content}</div>;
              } else if (content.type === "paragraph+link") {
                return (
                  <div>
                    <p>
                      {content.content}
                      {content.link}
                    </p>
                  </div>
                );
              } else if (content.type === "techStack") {
                return (
                  <div className="techStack">
                    <h2>Tech Stack</h2>
                    <ul className="techStackList">
                      {content.content.map((tech) => (
                        <li>
                          {tech.logo}
                          <p className="name">{tech.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              } else if (content.type === "links") {
                return (
                  <div className="projectLinkList">
                    {content.content.map((link) => (
                      <a
                        href={link.link}
                        target={"blank"}
                        className="customButton"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                );
              } else {
                return (
                  <div>
                    <h1>!!ERROR!!</h1>
                    <h2>Type not recognized</h2>
                  </div>
                );
              }
            })}
          </div>
        ) : (
          <></>
        )}

        {project.gallery && project.gallery.length > 0 ? (
          <div className="projectGallery">
            <h2>Gallery</h2>
            <div className="projectGalleryGrid">
              {project.gallery.map((img, key) => (
                <img
                  src={img.link}
                  alt={img.alt}
                  onClick={(event) => handleOpenGallery(event, key)}
                  key={key}
                />
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
