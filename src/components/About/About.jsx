import React from 'react';
import styles from './About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import aboutImage from '../../assets/hero-pixel.png';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section className={`${styles.about} container`} id="about-me">
      <div className={styles.aboutContent}>
        <div className={styles.text}>
          <h2 className={styles.title}>
            <span className={styles.accent}>#</span>{t('about-me')}
          </h2>
          <p className={styles.description}>
            {t('about_p1')}
          </p>
          <p className={styles.description}>
            {t('about_p2')}
          </p>
          <p className={styles.description}>
            {t('about_p3')}
          </p>
          <p className={styles.description}>
            {t('about_p4')}
          </p>

          <a href="mailto:joaogneves.dev@gmail.com">
            <button className={styles.contactButton}>
              Email <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
            </button>
          </a>

          <a href="https://github.com/jgneves-dev" target="_blank" rel="noopener noreferrer">
            <button className={styles.contactButton}>
              GitHub <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
            </button>
          </a>

          
          <a href="https://www.linkedin.com/in/joaogomesneves/" target="_blank" rel="noopener noreferrer">
            <button className={styles.contactButton}>
              Linked <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
            </button>
          </a>
        </div>

        <img
          loading="lazy"
          src={aboutImage}
          className={`${styles.aboutImage} ${styles.svgIcon}`}
          alt={t('about_image_alt')}
        />
      </div>
    </section>
  );
};

export default About;
