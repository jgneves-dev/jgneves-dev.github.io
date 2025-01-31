import React from 'react';
import styles from './Career.module.css';
import { useTranslation } from 'react-i18next';

const Career = () => {
  const { t } = useTranslation();
  const timelineData = [
    {
      date: '2011 - 2016',
      title: t('music_education'),
      location: 'Conservatório de Música de Ourém e Fátima - Fátima, Portugal',
      description: (
        <ul>
          <li>{t('learned_instrument')}</li>
          <li>{t('participated_chorus')}</li>
          <li>{t('engaged_music')}</li>
        </ul>
      ),
    },
    {
      date: '2016 - 2019',
      title: t('informatics_scientific_course'),
      location: 'Colégio de São Miguel - Fátima, Portugal',
      description: (
        <ul>
          <li>{t('web_programming')}</li>
          <li>{t('programming')}</li>
          <li>{t('it_applications')}</li>
          <li>{t('communication_networks')}</li>
          <li>{t('computer_architecture')}</li>
        </ul>
      ),
    },
    {
      date: '2017 - 2018',
      title: t('waiter'),
      location: 'Heleno - Fátima, Portugal',
      description: t('waiter_description'),
    },
    {
      date: '2018 - Present',
      title: t('construction_worker_technician'),
      location: 'Compactbase - Fátima, Portugal',
      description: t('construction_worker_technician_description'),
    },
    {
      date: '2018 - 2019',
      title: t('computer_technician'),
      location: 'InforAbreu - Leiria, Portugal',
      description: t('computer_technician_description'),
    },
    {
      date: '2019 - 2021',
      title: t('higher_technological_course'),
      location: 'Polytechnic Institute of Leiria - Leiria, Portugal',
      description: (
        <ul>
          <li>{t('web_programming')}</li>
          <li>{t('web_server_programming')}</li>
          <li>{t('digital_marketing')}</li>
          <li>{t('video_editing')}</li>
        </ul>
      ),
    },
    {
      date: '2020',
      title: t('web_designer_developer'),
      location: 'Strongfloor - Fátima, Portugal',
      description: t('web_designer_developer_description'),
    },
    {
      date: '2021 - 2024',
      title: t('undergraduate_games_multimedia'),
      location: 'Polytechnic Institute of Leiria - Leiria, Portugal',
      description: (
        <ul>
          <li>{t('game_programming')}</li>
          <li>{t('game_engines')}</li>
          <li>{t('user_interface_design')}</li>
          <li>{t('ai_applied_to_games')}</li>
          <li>{t('advanced_game_programming')}</li>
        </ul>
      ),
    },
  ];

  return (
    <section className={`${styles.career} container`} id="career">
      <h2 className={styles.title}>
        <span className={styles.accent}>#</span>{t('career')}
      </h2>
      <div className={styles.timeline}>
        {timelineData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <div className={styles.timelineDate}>{item.date}</div>
              <h3 className={styles.timelineTitle}>{item.title}</h3>
              <h4 className={styles.timelineLocation}>{item.location}</h4>
              <p className={styles.timelineDescription}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Career;
