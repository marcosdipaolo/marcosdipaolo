import SectionTitle from '../../SectionTitle';
import ContactForm from './ContactForm';
import Engage from './Engage';

const Contact = () => (
  <section className="container contact">
    <SectionTitle tT="pages.contact.sectionTitle" tBg="pages.contact.titleBg" />
    <div className="row">
      <div className="col-lg-4">
        <Engage />
      </div>
      <div className="col-lg-8">
        <ContactForm />
      </div>
    </div>
  </section>
);

export default Contact;
