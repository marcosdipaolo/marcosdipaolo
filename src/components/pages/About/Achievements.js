import { Trans } from 'react-i18next';

const Achievements = () => (
  <div className="achievements col-12 col-lg-7 col-xl-5">
    <div className="row">
      <div className="col-6">
        <div className="stats mb-30 pl-30 py-20 rounded">
          <h2 className="position-relative">3</h2>
          <Trans i18nKey="pages.about.yearsOfExperience">
            <p className="text-upper fs-14">
              {' '}
              <span className="d-block"> </span>
            </p>
          </Trans>
        </div>
      </div>
      <div className="col-6">
        <div className="stats mb-30 pl-30 py-20 rounded">
          <h2 className="position-relative">25</h2>
          <Trans i18nKey="pages.about.completedProjects">
            <p className="text-upper fs-14">
              {' '}
              <span className="d-block"> </span>
            </p>
          </Trans>
        </div>
      </div>
      <div className="col-6">
        <div className="stats pl-30 py-20 rounded">
          <h2 className="position-relative">21</h2>
          <Trans i18nKey="pages.about.happyCostumers">
            <p className="text-upper fs-14">
              {' '}
              <span className="d-block"> </span>
            </p>
          </Trans>
        </div>
      </div>
      <div className="col-6">
        <div className="stats pl-30 py-20 rounded">
          <h2 className="position-relative">13</h2>
          <Trans i18nKey="pages.about.coursesCompleted">
            <p className="text-upper fs-14">
              {' '}
              <span className="d-block"> </span>
            </p>
          </Trans>
        </div>
      </div>
    </div>

  </div>
);

export default Achievements;
