import '../sass/style.scss';
import {
  Router, Route, Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './sections/header/Header';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import history from '../history';
import Home from './pages/Home';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects';
import About from './pages/About/About';
import Music from './pages/Music/Music';
import ToggleMobileMenu from './sections/header/ToggleMobileMenu';
import { setCurrentPage } from '../actions';
import SinglePost from './pages/Blog/SinglePost';
import PlayingInfo from './PlayingInfo';

const App = ({
  setCurrentPage, currentPage, currentLanguage, playingTrack,
}) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    let url = window.location.pathname.substr(1) || 'home';
    if (url.includes('/')) {
      [url] = url.split('/');
    }
    setCurrentPage(url);
    i18n.changeLanguage(currentLanguage);
  }, [setCurrentPage, currentLanguage, i18n]);

  return (
    <div id="App" className="position-relative">
      <PlayingInfo />
      <audio id={`playing-track-${playingTrack ? playingTrack.key : ''}`} src={playingTrack ? playingTrack.audio : null} />
      <ToggleMobileMenu />
      {currentPage !== 'home' ? <Header /> : ''}
      <Router history={history}>
        <MobileNav />
        <DesktopNav />
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition classNames="fade" timeout={300} key={location.key}>
              <Switch location={location}>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/blog/:id" exact component={SinglePost} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/music" exact component={Music} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
        />
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
  currentLanguage: state.currentLanguage,
  playingTrack: state.playingTrack,
});

export default connect(mapStateToProps, { setCurrentPage })(App);
