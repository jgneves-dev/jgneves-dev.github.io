import React from 'react';
import styles from './ProjectCard.module.css';
import { useTranslation } from 'react-i18next'; // Import translation hook


export const ProjectCard = ({ image, languages, title, description, viewMoreUrl }) => {
  const { t, i18n } = useTranslation();
  return (
    <article className={styles.card}>
      <img
        loading="lazy"
        src={image}
        className={styles.cardImage}
        alt={`${title} project thumbnail`}
      />
      <div className={styles.languages}>
        {languages.join(', ')} {/* Join the languages with commas */}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a href={viewMoreUrl} target="_blank" rel="noopener noreferrer" className={styles.viewMore}>
          {t('view_more')} ~~>
        </a>
      </div>
    </article>
  );
};
