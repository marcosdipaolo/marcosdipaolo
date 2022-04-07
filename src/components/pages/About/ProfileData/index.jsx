import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import data from './profileData';

const ProfileData = ({ currentLanguage }) => {
  const { t } = useTranslation();

  const profileData = data(t);

  return (
    <div className="row profile-data">
      <div className="col-6">
        <ul className="pl-0">
          {
            profileData.firstColumn.map((data) => (
              <li className="mb-20" key={data.value}>
                <span className="text-wrap key text-capitalize">
                  {data.key}
                  :
                  {' '}
                </span>
                <span
                  className="d-block d-sm-inline-block d-lg-block d-xl-inline-block text-wrap value fw-600"
                >
                  {data.value}
                </span>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="col-6">
        <ul className="pl-0">
          {
            profileData.secondColumn.map((data) => (
              <li className="mb-20" key={data.value}>
                <span className="text-wrap key text-capitalize">
                  {data.key}
                  :
                  {' '}
                </span>
                <span
                  className="d-block d-sm-inline-block d-lg-block d-xl-inline-block text-wrap value fw-600"
                >
                  {data.value}
                </span>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="col-12 mt-10">
        <a href={`/cv-${currentLanguage}.pdf`} download target="_self" className="mdp-btn">{t('pages.about.downloadCv')}</a>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({ currentLanguage: state.currentLanguage });
export default connect(mapStateToProps)(ProfileData);
