import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Project = ({
  easyName,
  name,
  description,
  imagePath,
  alt,
  link,
  position,
  stack,
  projectLink,
  webpage,
}) => {
  return (
    <div className="singleProject" id={easyName}>
      <div className="imageDescriptionWrapper">
        <Link href={projectLink}>
          <div className="imageContainer">
            <Image
              src={imagePath}
              alt={alt}
              width={500}
              height={500}
              style={{ objectPosition: position }}
            />
            <div className="titleContainer">
              <h3>{name}</h3>
            </div>
          </div>
        </Link>
        <p>{description}</p>
      </div>
      <div>
        <p className="stack">
          <b>Stack:</b> {stack}
        </p>
        <div
          className="tempWrapper"
          style={{ display: 'flex', flexFlow: 'row nowrap', gap: '1rem' }}
        >
          <Link className="customButton" href={projectLink}>
            Learn More
          </Link>
          <a
            className="customButton"
            rel="noreferrer"
            href={link}
            target="_blank"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
