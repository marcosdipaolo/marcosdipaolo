import { useTranslation } from 'react-i18next';
import Skill from './Skill';

const Skills = () => {
  const { t } = useTranslation();
  const devData = [
    { language: 'nodejs', percent: 80 },
    { language: 'javascript', percent: 85 },
    { language: 'css', percent: 95 },
    { language: 'php', percent: 90 },
    { language: 'wordpress', percent: 75 },
    { language: 'typescript', percent: 85 },
    { language: 'scss', percent: 70 },
    { language: 'react', percent: 70 },
  ];
  return (
    <div className="row skills">
      <div className="col-12">
        <h3 className="col-12 text-upper my-50">{t('pages.about.mySkills')}</h3>
      </div>
      {devData.map((data) => <Skill {...data} />)}
    </div>
  );
};

export default Skills;
