import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentPage } from '../actions';
import LangChanger from './LangChanger';

const DesktopNav = (props) => {
  const links = [
    { to: '/', icon: 'home', page: 'home' },
    { to: '/about', icon: 'user', page: 'about' },
    { to: '/projects', icon: 'briefcase', page: 'projects' },
    { to: '/contact', icon: 'envelope-open', page: 'contact' },
    { to: '/music', icon: 'music', page: 'music' },
    { to: '/blog', icon: 'comments', page: 'blog' },
  ];

  const onClickHandler = (page) => {
    props.setCurrentPage(page);
  };

  const active = (page) => (page === props.currentPage ? 'active ' : '');

  return (
    <div className="desktop-nav d-none d-lg-block w-60 text-center">
      <LangChanger />
      <ul className="icons">
        {links.map((link) => (
          <Link to={link.to} className="position-relative" style={{ top: '-2px' }} key={link.to}>
            <li
              onClick={() => onClickHandler(link.page)}
              className={`${active(link.page)}w-50 h-50 fs-20 mb-20 p-10 text-center d-inline-block`}
            >
              <i className={`fa fa-${link.icon}`} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({ currentPage: state.currentPage });

export default connect(mapStateToProps, { setCurrentPage })(DesktopNav);
