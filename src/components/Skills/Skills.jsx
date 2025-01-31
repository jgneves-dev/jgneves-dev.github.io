import React from 'react';
import styles from './Skills.module.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faBootstrap, faLaravel, faUnity, faJs, faPython, faJava, faHtml5, faCss3Alt, faPhp, faGithubSquare, faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faPeopleArrows, faComments, faGears, faHandshake, faPaintbrush } from '@fortawesome/free-solid-svg-icons';
import unrealEngineIcon from '../../assets/unreal.svg';
import csharpIcon from '../../assets/csharp.svg';
import cppIcon from '../../assets/cpp.svg';
import aeIcon from '../../assets/aftereffects.svg';
import illustratorIcon from '../../assets/illustrator.svg';
import premiereIcon from '../../assets/premiere.svg';
import photoshopIcon from '../../assets/photoshop.svg';
import vscodeIcon from '../../assets/vscode.svg';
import Flag from 'react-world-flags';

const Skills = () => {
  const { t } = useTranslation();

  const skills = {
    Languages: [
      { name: t('Languages.PT'), code: 'PT' },
      { name: t('Languages.EN'), code: 'US' },
      { name: t('Languages.ES'), code: 'ES' },
    ],
    Frameworks: [
      { name: 'React', icon: faReact, progress: 40 },
      { name: 'Bootstrap', icon: faBootstrap, progress: 70 },
      { name: 'Laravel', icon: faLaravel, progress: 40 },
    ],
    Game_Engines: [
      { name: 'Unreal Engine', icon: unrealEngineIcon, progress: 70 },
      { name: 'Unity', icon: faUnity, progress: 50 },
      { name: 'RPG Maker', icon: faFortAwesome, progress: 40 },
    ],
    Soft_Skills: [
      { name: t('Soft_Skills.Communication'), icon: faComments },
      { name: t('Soft_Skills.Teamwork'), icon: faPeopleArrows },
      { name: t('Soft_Skills.Problem_Solving'), icon: faGears },
      { name: t('Soft_Skills.Creativity'), icon: faPaintbrush },
      { name: t('Soft_Skills.Adaptability'), icon: faHandshake },
    ],
    Software: [
      { name: 'GitHub', icon: faGithubSquare, progress: 40 },
      { name: 'Photoshop', icon: photoshopIcon, progress: 70 },
      { name: 'Premiere', icon: premiereIcon, progress: 70 },
      { name: 'Illustrator', icon: illustratorIcon, progress: 50 },
      { name: 'After Effects', icon: aeIcon, progress: 60 },
      { name: 'VS Code', icon: vscodeIcon, progress: 80 },
    ],
    Programming_Languages: [
      { name: 'JavaScript', icon: faJs, progress: 60 },
      { name: 'Python', icon: faPython, progress: 50 },
      { name: 'Java', icon: faJava, progress: 25 },
      { name: 'C#', icon: csharpIcon, progress: 50 },
      { name: 'C++', icon: cppIcon, progress: 60 },
      { name: 'HTML', icon: faHtml5, progress: 100 },
      { name: 'CSS', icon: faCss3Alt, progress: 80 },
      { name: 'PHP', icon: faPhp, progress: 60 },
      { name: 'MySQL', icon: faDatabase, progress: 40 },
    ],
  };

  return (
    <section className={`${styles.skills} container`} id="skills">
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.accent}>#</span>{t('skills')}
        </h2>
      </div>
      <div className={styles.content}>
        {Object.keys(skills).map((category, index) => (
          <div key={index} className={styles.skillCategoryBox}>
            <h3 className={styles.categoryTitle}>{t(`categories.${category}`)}</h3>
            <ul className={styles.skillList}>
              {skills[category].map((skill, index) => (
                <li key={index} className={styles.skillItem}>
                  {category === 'Languages' ? (
                    <Flag code={skill.code} alt={`${skill.name} Flag`} className={styles.flagIcon} />
                  ) : (
                    typeof skill.icon === 'object' ? (
                      <FontAwesomeIcon icon={skill.icon} className={styles.skillIcon} />
                    ) : (
                      <img src={skill.icon} alt={skill.name} className={`${styles.skillIcon} ${styles.svgIcon}`} />
                    )
                  )}
                  <span className={styles.skillName}>{skill.name}</span>
                  {skill.progress && (
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progress}
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
