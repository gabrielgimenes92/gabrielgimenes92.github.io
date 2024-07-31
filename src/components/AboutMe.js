import React from 'react';
import styles from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <spam id="about"></spam>
      <h2>About me</h2>
      <p>
        Graduated from Langara College - Web & Mobile App Development
        Post-Degree, awarded 4 times with the Dean&apos;s Honor Roll, and second
        best capstone project of the semester. Langara&apos;s course is set to
        mimic a startup environment by having designers and developers work
        together to, in a 12-week period per semester, conceptualize and develop
        a product. Along the semesters these projects gave me experience in
        React Native, React, Swift, Android (using Java), Javascript, SCSS, and
        HTML. Furthermore, I&apos;m originally a mechanical engineer with over
        10 years of experience and I believe my background provides me with
        other skills like problem-solving, product management, and interpersonal
        skills.
      </p>
    </section>
  );
};

export default AboutMe;
