import React from 'react';
import styles from './Projects.module.css';
import { ProjectCard } from './ProjectCard';
import { useTranslation } from 'react-i18next';

export const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      image: "../../assets/bn-thumb.png",
      languages: ["C#", "Unity 6"],
      title: "Bubblenaut",
      description: t('bubblenaut'),
      viewMoreUrl: "https://bigoddstudios.itch.io/bubblenaut"
    },
    {
      image: "../../assets/hero-image.png",
      languages: ["JavaScript", "React", "CSS", "HTML"],
      title: "Portfolio",
      description: t('portfolio'),
      viewMoreUrl: "https://jgneves-dev.github.io/"
    },
    {
      image: "../../assets/cb-thumb.png",
      languages: ["C++", "Unreal Engine 4"],
      title: "Crazy Bus!",
      description: t('crazy_bus'),
      viewMoreUrl: "https://crazybus-finalproject.itch.io/crazy-bus"
    },
    {
      image: "../../assets/rom-thumb.png",
      languages: ["C++, Unreal Engine 4"],
      title: "Rooms of Mystery",
      description: t('rooms_of_mystery'),
      viewMoreUrl: "https://coffecatgames.itch.io/rooms-of-mystery"
    },
    {
      image: "../../assets/fs-thumb.png",
      languages: ["C#", "Unity"],
      title: "Forgotten Shrine",
      description: t('forgotten_shrine'),
      viewMoreUrl: "https://edgypress-studio.itch.io/forgotten-shrine"
    },
    {
      image: "../../assets/bat-thumb.png",
      languages: ["GBStudio"],
      title: "By a Thread",
      description: t('by_a_thread'),
      viewMoreUrl: "https://tomous.itch.io/by-a-thread"
    },
    {
      image: "../../assets/ff-thumb.png",
      languages: ["C#", "Unity"],
      title: "Fool's Frenzy",
      description: t('fools_frenzy'),
      viewMoreUrl: "https://edgypress-studio.itch.io/fools-frenzy"
    },
    {
      image: "../../assets/sf-thumb.png",
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
