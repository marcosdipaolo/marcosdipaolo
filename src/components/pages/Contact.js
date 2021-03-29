import SectionTitle from '../SectionTitle';

const Contact = () => (
  <section className="container contact">
    <SectionTitle tT="pages.contact.sectionTitle" tBg="pages.contact.titleBg" />
    <div className="row">
      <div className="col-lg-4">
        <h3 className="text-upper mb-20">don&apos;t by shy</h3>
        <p className="fs-14">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
        <p className="position-relative fs-14 my-20 px-50">
          <i className="color-primary fs-33  fa fa-envelope-open position-absolute" aria-hidden="true" />
          <span className="text-upper d-block fs-14 title">mail me</span>
          <span className="fw-600">{'marcosdipaolo{at}gmail.com'}</span>
        </p>
        <p className="position-relative fs-14 px-50">
          <i className="color-primary fs-38  fa fa-phone-square position-absolute" aria-hidden="true" />
          <span className="text-upper d-block fs-14 title">call me</span>
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
      <div className="col-lg-8">
        <div className="row">
          <div className="col-12 col-md-4">
            <input id="name" className="mb-35 pl-30" type="text" placeholder="YOUR NAME" />
          </div>
          <div className="col-12 col-md-4">
            <input id="email" className="mb-35 pl-30" type="text" placeholder="YOUR EMAIL" />
          </div>
          <div className="col-12 col-md-4">
            <input id="subject" className="mb-35 pl-30" type="text" placeholder="THE SUBJECT" />
          </div>
        </div>
        <textarea className="mb-20 pt-20 pl-30" placeholder="YOUR MESSAGE" />
        <button type="button" className="mdp-btn mb-20">send message</button>
      </div>
    </div>
  </section>
);

export default Contact;
