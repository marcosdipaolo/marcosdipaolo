import '../sass/style.scss'
import Header from './sections/header/Header'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'
import { Router, Route, Switch } from 'react-router-dom'
import history from "../history";
import Home from '../components/pages/Home'
import Blog from './pages/Blog/Blog'
import Contact from '../components/pages/Contact'
import Portfolio from '../components/pages/Portfolio'
import About from './pages/About/About'
import ToggleMobileMenu from './sections/header/ToggleMobileMenu'
import { connect } from 'react-redux'
import { setCurrentPage } from '../actions'
import { useEffect } from 'react';

const App = props => {
  useEffect(() => {
    props.setCurrentPage(window.location.pathname.substr(1) || 'home')
  }, [props])
  return (
    <div className="position-relative">
      <ToggleMobileMenu />
      {props.currentPage !== 'home' ? <Header /> : ''}
      <Router history={history}>
        <MobileNav />
        <DesktopNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/portfolio" exact component={Portfolio} />
        </Switch>
      </Router>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage
  }
}

export default connect(mapStateToProps, { setCurrentPage })(App)