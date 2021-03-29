import { useTranslation } from 'react-i18next';
import { education, experience } from './ed-xp-data';
import ResumeItem from './ResumeItem';

const EducationXP = () => {
  const { t } = useTranslation();

  // eslint-disable-next-line no-console
  console.log(t(''));

  return (
    <div className="row educ-xp">
      <div className="col-12">
        <h3 className="text-upper my-50">Education & experience</h3>
      </div>
      <div className="col-lg-6">
        <ul className="p-0">
          {education.map((e) => (
            <ResumeItem
              icon={e.icon}
              time={e.time}
              role={e.role}
              place={e.place}
              description={e.description}
              key={e.id}
            />
          ))}
        </ul>
      </div>
      <div className="col-lg-6">
        <ul className="p-0">
          {experience.map((e) => (
            <ResumeItem
              icon={e.icon}
              time={e.time}
              role={e.role}
              place={e.place}
              description={e.description}
              key={e.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationXP;
