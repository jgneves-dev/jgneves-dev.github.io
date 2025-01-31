import React from 'react';
import styles from './Hero.module.css';
import { useTranslation } from 'react-i18next'; // Import translation hook

export const Hero = () => {
  const { t, i18n } = useTranslation(); // Get translation function (t) and i18n instance

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({
      behavior: "smooth", // Ensures smooth scrolling
      block: "start", // Align the target at the top of the view
    });
  };

  // Sentence structure for different languages
  const sentenceStructure = {
    en: [
      t('is_a'),
      <span className={styles.highlight}>{t('gameplay')}</span>,
      t('and'),
      <span className={styles.highlight}>{t('AI')}</span>,
      t('programmer_comma_a'),
      <span className={styles.highlight}>{t('web')}</span>,
      t('designer_and_a'),
      <span className={styles.highlight}>{t('front-end')}</span>,
      t('developer'),
    ],
    pt: [
      t('is_a'),
      t('programador_de'),
      <span className={styles.highlight}>{t('gameplay')}</span>,
      t('and'),
      <span className={styles.highlight}>{t('AI')}{t('programmer_comma_a')}</span>,
      t('designer_and_a'),
      <span className={styles.highlight}>{t('web')}</span>,
      t('developer'),
      <span className={styles.highlight}>{t('front-end')}</span>,
    ],
    es: [
      t('is_a'),
      t('programador_de'),
      <span className={styles.highlight}>{t('gameplay')}</span>,
      t('and'),
      <span className={styles.highlight}>{t('AI')}{t('programmer_comma_a')}</span>,
      t('designer_and_a'),
      <span className={styles.highlight}>{t('web')}</span>,
      t('developer'),
      <span className={styles.highlight}>{t('front-end')}</span>,
    ],
  };

  return (
    <section className={`${styles.hero} container`} role="banner" id="home">
      <div className={styles.heroContent}>
        <img
          loading="lazy"
          src="/assets/hero-image.png"
          className={styles.heroImage}
          alt={t('hero_image_alt')}
        />
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>
              João Neves<span className={styles.accent}>.</span>:
            </h1>
            <p className={styles.subtitle}>
              <span>:</span>
              <span className={styles.accent}>.</span>
              {sentenceStructure[i18n.language].map((text, index) => (
                <span key={index}>{text} </span>
              ))}
            </p>
            <p className={styles.specialparagraph}>{t('status')}</p>
            <button className={styles.contactButton} onClick={scrollToContact}>
              {t('contact_me')} ~~>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
