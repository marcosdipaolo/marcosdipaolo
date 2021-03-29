import { useTranslation } from 'react-i18next';

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
      {devData.map((data) => (
        <div className="col-6 col-md-3 mb-30" key={data.language}>
          <div className={`c100 p${data.percent}`}>
            <span>
              {data.percent}
              %
            </span>
            <div className="slice">
              <div className="bar" />
              <div className="fill" />
            </div>
          </div>
          <h6 className="text-upper mt-10 text-center">{data.language}</h6>
        </div>
      ))}
    </div>
  );
};

export default Skills;
