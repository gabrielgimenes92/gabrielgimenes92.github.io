import React from "react";
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

  return (
    <div className="projectPage">
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
      <div className="projectLinks"></div>
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
                    <p>{content.content[1]}</p>
                  </div>
                );
              } else if (content.type === "text+image") {
                return (
                  <div className="projectTextImage">
                    <p>{content.content[0]}</p>
                    <img src={content.content[1]} alt={content.alt} />
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
                </div>;
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
              {project.gallery.map((img) => (
                <img src={img.link} alt={img.alt} />
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
