import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navigation.module.css';
import logoImage from '../../assets/logo.png';

export const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const languages = [
    { label: 'EN', code: 'en' },
    { label: 'PT', code: 'pt' },
    { label: 'ES', code: 'es' },
  ];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('language', code);
    setDropdownOpen(false);
  };

  const currentLanguage = i18n.language.toUpperCase();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      let offset = -20;
      if (id === 'home') {
        offset = -80;
      }
      const bodyRect = document.body.getBoundingClientRect().top;
      const sectionRect = section.getBoundingClientRect().top;
      const sectionPosition = sectionRect - bodyRect;
      const offsetPosition = sectionPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.navigation} container`} role="navigation" aria-label="Main navigation">
      <img
        loading="lazy"
        src={logoImage}
        className={styles.logo}
        alt="Portfolio logo"
        onClick={() => scrollToSection('home')}
        style={{ cursor: 'pointer' }}
      />
      <span className={styles.brandName} onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>João Neves</span>

      <button className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`${styles.menuItems} ${menuOpen ? styles.open : ''}`}>
        <button className={styles.menuItem} tabIndex={0} onClick={() => scrollToSection('about-me')}>
          <span style={{ color: '#ef9940' }}>//</span>
          {t('about-me')}
        </button>
        <button className={styles.menuItem} tabIndex={0} onClick={() => scrollToSection('career')}>
          <span style={{ color: '#ef9940' }}>//</span>
          {t('career')}
        </button>
        <button className={styles.menuItem} tabIndex={0} onClick={() => scrollToSection('skills')}>
          <span style={{ color: '#ef9940' }}>//</span>
          {t('skills')}
        </button>
        <button className={styles.menuItem} tabIndex={0} onClick={() => scrollToSection('projects')}>
          <span style={{ color: '#ef9940' }}>//</span>
          {t('projects')}
        </button>
        <button className={styles.menuItem} tabIndex={0} onClick={() => scrollToSection('contact-me')}>
          <span style={{ color: '#ef9940' }}>//</span>
          {t('contact_me')}
        </button>
        <div
          className={styles.languageDropdown}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className={styles.languageToggle}>
            {currentLanguage}
            <span className={styles.arrowDown}></span>
          </button>
          <div className={styles.dropdownMenu}>
            {languages.map((lang, index) => (
              <button
                key={index}
                className={styles.dropdownItem}
                onClick={() => handleLanguageChange(lang.code)}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
