import React from 'react';
import styles from './Projects.module.css';
import { ProjectCard } from './ProjectCard';
import { useTranslation } from 'react-i18next';

const compactbaseImage = "/assets/compactbase-thumb.png";
const bubblenautImage = "/assets/bn-thumb.png";
const portfolioImage = "/assets/hero-image.png";
const crazybusImage = "/assets/cb-thumb.png";
const roomsofmysteryImage = "/assets/rom-thumb.png";
const forgottenshrineImage = "/assets/fs-thumb.png";
const byathreadImage = "/assets/bat-thumb.png";
const foolsfrenzyImage = "/assets/ff-thumb.png";
const strayfriendsImage = "/assets/sf-thumb.png";

export const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      image: compactbaseImage,
      languages: ["React", "TypeScript", "Vite", "CSS", "HTML"],
      title: "Compactbase Landing Page",
      description: t('compactbase'),
      viewMoreUrl: "https://jgneves-dev.github.io/compactbase/"
    },
    {
      image: bubblenautImage,
      languages: ["C#", "Unity 6"],
      title: "Bubblenaut",
      description: t('bubblenaut'),
      viewMoreUrl: "https://bigoddstudios.itch.io/bubblenaut"
    },
    {
      image: portfolioImage,
      languages: ["React", "JavaScript", "Vite", "CSS", "HTML"],
      title: "Portfolio",
      description: t('portfolio'),
      viewMoreUrl: "https://jgneves-dev.github.io/"
    },
    {
      image: crazybusImage,
      languages: ["C++", "Unreal Engine 4"],
      title: "Crazy Bus!",
      description: t('crazy_bus'),
      viewMoreUrl: "https://crazybus-finalproject.itch.io/crazy-bus"
    },
    {
      image: roomsofmysteryImage,
      languages: ["C++, Unreal Engine 4"],
      title: "Rooms of Mystery",
      description: t('rooms_of_mystery'),
      viewMoreUrl: "https://coffecatgames.itch.io/rooms-of-mystery"
    },
    {
      image: forgottenshrineImage,
      languages: ["C#", "Unity"],
      title: "Forgotten Shrine",
      description: t('forgotten_shrine'),
      viewMoreUrl: "https://edgypress-studio.itch.io/forgotten-shrine"
    },
    {
      image: byathreadImage,
      languages: ["GBStudio"],
      title: "By a Thread",
      description: t('by_a_thread'),
      viewMoreUrl: "https://tomous.itch.io/by-a-thread"
    },
    {
      image: foolsfrenzyImage,
      languages: ["C#", "Unity"],
      title: "Fool's Frenzy",
      description: t('fools_frenzy'),
      viewMoreUrl: "https://edgypress-studio.itch.io/fools-frenzy"
    },
    {
      image: strayfriendsImage,
      languages: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "Weebly"],
      title: "Stray Friends",
      description: t('stray_friends'),
      viewMoreUrl: "https://strayfriends.weebly.com/"
    },
  ];

  return (
    <section className={`${styles.projects} container`} aria-labelledby="projects-title" id="projects">
      <div className={styles.header}>
        <h2 id="projects-title" className={styles.title}>
          <span className={styles.accent}>#</span>{t('projects')}
        </h2>
      </div>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};
