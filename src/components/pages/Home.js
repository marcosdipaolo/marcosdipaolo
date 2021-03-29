import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentPage } from '../../actions';

const Home = (props) => {
  const onClickHandler = (page) => {
    props.setCurrentPage(page);
  };
  return (
    <section className="container-fluid home p-25">
      <div className="d-none d-lg-block color-block position-fixed" />
      <div className="row">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block img"
          style={{ backgroundImage: 'url(/images/portrait_big.jpg)' }}
        />
        <div className="content col-12 col-lg-8 offset-lg-4 text-left text-sm-center text-lg-start d-flex">
          <div className="text m-auto p-10">
            <img src="/images/portrait-mobile.jpg" alt="" className="w-280 d-none d-sm-inline-block d-lg-none" />
            <h6 className="d-block d-sm-none text-upper">hi there!</h6>
            <h1 className="mt-sm-4 mt-lg-0 mb-10">
              I&apos;m
              <span>Marcos Di Paolo</span>
            </h1>
            <p className=" lh-32">
              I&apos;m a Tunisian based web designer & front‑end developer focused on
              crafting clean & user‑friendly experiences, I am passionate about building excellent
              software that improves the lives of those around me.
            </p>
            <Link to="/about"><span onClick={() => onClickHandler('about')} className="mdp-btn mt-15">more about me</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect(null, { setCurrentPage })(Home);
