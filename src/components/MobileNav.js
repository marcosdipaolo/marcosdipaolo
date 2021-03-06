import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toggleMobileMenuOpened, setCurrentPage } from '../actions/index';
import LangChanger from './LangChanger';

const MobileNav = ({
  toggleMobileMenuOpened,
  setCurrentPage,
  currentPage,
  mobileMenuOpened,
}) => {
  const { t } = useTranslation();
  const clickHandler = (page) => {
    toggleMobileMenuOpened(false);
    setCurrentPage(page);
  };
  const active = (page) => (page === currentPage ? 'active ' : '');
  const menuData = [
    { page: 'home', icon: 'home', url: '/' },
    { page: 'about', icon: 'user', url: '/about' },
    { page: 'contact', icon: 'envelope-open', url: '/contact' },
    { page: 'music', icon: 'music', url: '/music' },
    { page: 'blog', icon: 'comments', url: '/blog' },
  ];
  return (
    <nav className={`${mobileMenuOpened ? 'opened ' : ''}d-lg-none pt-20`}>
      <h2 className="fw-600 text-center">
        <LangChanger />
      </h2>
      <ul className="p-25 pt-50 mobile-nav list-unstyled list-group text-upper">
        {menuData.map((item) => (
          <li onClick={() => clickHandler(item.page)} className={`${active(item.page)}pb-14`} key={item.page}>
            <Link to={item.url}>
              <span><i className={`fa fa-${item.icon}`} /></span>
              <span className="d-inline-block ml-20">{t(`nav.items.${item.page}`)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  mobileMenuOpened: state.mobileMenuOpened,
  currentPage: state.currentPage,
});

export default connect(mapStateToProps, { toggleMobileMenuOpened, setCurrentPage })(MobileNav);
