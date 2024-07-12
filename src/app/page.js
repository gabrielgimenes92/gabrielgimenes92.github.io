import Image from 'next/image';
import styles from './page.module.scss';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
    </main>
  );
}
