import { Trans } from 'react-i18next';

const Achievement = ({ years, transKey }) => (
  <div className="col-6">
    <div className="stats mb-30 pl-30 py-20 rounded">
      <h2 className="position-relative">{years}</h2>
      <Trans i18nKey={transKey}>
        <p className="text-upper fs-14">
          {' '}
          <span className="d-block"> </span>
        </p>
      </Trans>
    </div>
  </div>
);

export default Achievement;
