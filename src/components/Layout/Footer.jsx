import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import logoImage from '../../assets/logo.png';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.footerContent}>
        
        {/* Left: Logo & Name */}
        <div className={styles.brand}>
          <img src={logoImage} alt="Joao Neves logo" className={styles.logo} />
          <h2 className={styles.name}>João Neves</h2>
        </div>

        {/* Right: Social Media Links */}
        <div className={styles.socials}>
          <a href="mailto:joaogneves.dev@gmail.com" className={styles.socialLink} aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://github.com/jgneves-dev" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/joaogomesneves/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>

      {/* Description below Logo & Name */}
      <p className={styles.description}>
        {t('footer_desc')}
      </p>

      {/* Copyright */}
      <p className={styles.text}>
        © {new Date().getFullYear()} João Neves. {t('all_rights_reserved')}
      </p>
    </footer>
  );
};
