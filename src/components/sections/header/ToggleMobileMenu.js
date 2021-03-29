import { connect } from 'react-redux';
import { toggleMobileMenuOpened } from '../../../actions';

const ToggleMobileMenu = ({ mobileMenuOpened, toggleMobileMenuOpened }) => {
  const onClickHandler = () => {
    toggleMobileMenuOpened(!mobileMenuOpened);
  };
  return (
    <div
      onClick={onClickHandler}
      className={`${mobileMenuOpened ? 'opened ' : ''
      }d-lg-none toggle-menu position-absolute end-0 pr-30 pt-6`}
    >
      <span className="first d-block mb-5" />
      <span className="second d-block mb-5" />
      <span className="d-block third mb-5" />
    </div>
  );
};

const mapStateToProps = (state) => ({
  mobileMenuOpened: state.mobileMenuOpened,
});

export default connect(mapStateToProps, { toggleMobileMenuOpened })(ToggleMobileMenu);
