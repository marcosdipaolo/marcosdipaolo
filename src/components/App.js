import '../sass/style.scss'
import Header from './sections/header/Header'
import MobileNav from './MobileNav'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import history from "../history";
import Home from '../components/pages/Home'
import Blog from '../components/pages/Blog'
import Contact from '../components/pages/Contact'
import Portfolio from '../components/pages/Portfolio'
import About from './pages/About/About'
import ToggleMobileMenu from './sections/header/ToggleMobileMenu'
import { connect } from 'react-redux'

const App = props => {
  return (
    <div className="position-relative">
      <ToggleMobileMenu />
      {props.currentPage !== 'home' ? <Header /> : ''}
      <Router history={history}>
        <MobileNav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/blog" exact component={Blog}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/portfolio" exact component={Portfolio}></Route>
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

export default connect(mapStateToProps)(App)