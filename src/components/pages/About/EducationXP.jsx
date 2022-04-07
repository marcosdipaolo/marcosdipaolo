import { useTranslation } from 'react-i18next';
import ResumeItem from './ResumeItem';

const EducationXP = () => {
  const { t } = useTranslation();
  /**
   * @property {string} timeFrame
   * @property {string} title
   * @property {string} institution
   * @property {string} description
   * @property {string} order
   */
  const ed = t('pages.about.education', { returnObjects: true });
  const xp = t('pages.about.xp', { returnObjects: true });

  const reorderFunction = (a, b) => (a.order > b.order ? 1 : -1);
  return (
    <div className="row educ-xp">
      <div className="col-12">
        <h3 className="text-upper my-50">{t('pages.about.educationAndExperience')}</h3>
      </div>
      <div className="col-lg-6">
        <ul className="p-0">
          {ed.sort(reorderFunction).map((e) => (
            <ResumeItem
              icon="graduation-cap"
              time={e.timeFrame}
              role={e.title}
              place={e.institution}
              description={e.description}
              key={e.order}
            />
          ))}
        </ul>
      </div>
      <div className="col-lg-6">
        <ul className="p-0">
          {xp.sort(reorderFunction).map((e) => (
            <ResumeItem
              icon="briefcase"
              time={e.timeFrame}
              role={e.title}
              place={e.institution}
              description={e.description}
              key={e.order}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationXP;
