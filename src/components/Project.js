import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import styles from './Project.module.scss';

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
    <div className={styles.singleProject} id={easyName}>
      <div className={styles.imageDescriptionWrapper}>
        <Link href={projectLink}>
          <div className={styles.imageContainer}>
            <Image
              src={imagePath}
              alt={alt}
              width={500}
              height={500}
              style={{ objectPosition: position }}
            />
            <div className={styles.titleContainer}>
              <h3>{name}</h3>
            </div>
          </div>
        </Link>
        <p>{description}</p>
      </div>
      <div>
        <p className={styles.stack}>
          <b>Stack:</b> {stack}
        </p>
        <div
          className="tempWrapper"
          style={{ display: 'flex', flexFlow: 'row nowrap', gap: '1rem' }}
        >
          <Link className={styles.customButton} href={projectLink}>
            Learn More
          </Link>
          <a
            className={styles.customButton}
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
