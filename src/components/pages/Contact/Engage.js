import { useTranslation } from 'react-i18next';

const Engage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h3 className="text-upper mb-20">{t('pages.contact.dontBeShy')}</h3>
      <p className="fs-14">{t('pages.contact.engagementText')}</p>
      <p className="position-relative fs-14 my-20 px-50">
        <i className="color-primary fs-33  fa fa-envelope-open position-absolute" aria-hidden="true" />
        <span className="text-upper d-block fs-14 title">{t('pages.contact.mailMe')}</span>
        <span className="fw-600">{'marcosdipaolo{at}gmail.com'}</span>
      </p>
      <p className="position-relative fs-14 px-50">
        <i className="color-primary fs-38  fa fa-phone-square position-absolute" aria-hidden="true" />
        <span className="text-upper d-block fs-14 title">{t('pages.contact.callMe')}</span>
        <span className="fw-600">+54 9 11 4145 1155</span>
      </p>
      <ul className="icons mb-50">
        <li className="w-40 fs-18 pt-5 mr-20 text-center h-40 d-inline-block">
          <a href="https://github.com/marcosdipaolo">
            <i className="fa fa-github" />
          </a>
        </li>
        <li className="w-40 fs-18 pt-5 mr-20 text-center h-40 d-inline-block">
          <a href="https://www.linkedin.com/in/marcos-di-paolo/">
            <i className="fa fa-linkedin" />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Engage;
