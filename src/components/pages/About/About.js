import { Trans } from 'react-i18next';
import Achievements from './Achievements';
import EducationXP from './EducationXP';
import ProfileData from './ProfileData';
import Skills from './Skills';
import SectionTitle from '../../SectionTitle';

const About = () => (
  <section className="about container-fluid position-absolute">
    <div className="container">
      <SectionTitle tT="pages.about.sectionTitle" tBg="pages.about.titleBg" />
      <div className="row">
        <div className="col-12 col-lg-5 col-xl-7">
          <h3 className="col-12 text-upper my-23"><Trans i18nKey="pages.about.personalInfos" /></h3>
          <div className="image-container col-12 d-block d-sm-none px-10 mb-25">
            <img src="/images/portrait-mobile.jpg" alt="" />
          </div>
          <ProfileData />
        </div>
        <Achievements />
      </div>
      <Skills />
      <EducationXP />
    </div>
  </section>
);

export default About;
