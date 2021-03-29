import '../sass/style.scss';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './sections/header/Header';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import history from '../history';
import Home from './pages/Home';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import About from './pages/About/About';
import Music from './pages/Music';
import ToggleMobileMenu from './sections/header/ToggleMobileMenu';
import { setCurrentPage } from '../actions';
import SinglePost from './pages/Blog/SinglePost';

const App = ({ setCurrentPage, currentPage, currentLanguage }) => {
  const { i18n } = useTranslation();
  useEffect(() => {
    let url = window.location.pathname.substr(1) || 'home';
    if (url.includes('/')) {
      [url] = url.split('/');
    }
    // eslint-disable-next-line no-console
    console.log(url);
    setCurrentPage(url);
    i18n.changeLanguage(currentLanguage);
  }, [setCurrentPage, currentLanguage, i18n]);
  return (
    <div className="position-relative">
      <ToggleMobileMenu />
      {currentPage !== 'home' ? <Header /> : ''}
      <Router history={history}>
        <MobileNav />
        <DesktopNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:id" exact component={SinglePost} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/music" exact component={Music} />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps, { setCurrentPage })(App);
