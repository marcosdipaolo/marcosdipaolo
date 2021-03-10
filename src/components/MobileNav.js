import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleMobileMenuOpened, setCurrentPage } from '../actions/index'
const MobileNav = props => {
    const clickHandler = page => {
        props.toggleMobileMenuOpened(false)
        props.setCurrentPage(page)
    }
    const active = page => {
        return page === props.currentPage ? 'active ' : ''
    }
    return (
        <nav className={(props.mobileMenuOpened ? "opened " : "") + "d-lg-none pt-20"}>
            <ul className="p-25 pt-50 mobile-nav list-unstyled list-group text-upper">
                <li onClick={() => clickHandler('home')} className={active('home') + "pb-14"}>
                    <Link to="/">
                        <span><i className="fa fa-home"/></span>
                        <span className="d-inline-block ml-20">home</span>
                    </Link>
                </li>
                <li onClick={() => clickHandler('about')} className={active('about') + "py-14"}>
                    <Link to="/about">
                        <span><i className="fa fa-user"/></span>
                        <span className="d-inline-block ml-23">about</span>
                    </Link>
                </li>
                <li onClick={() => clickHandler('portfolio')} className={active('portfolio') + "py-14"}>
                    <Link to="/portfolio">
                        <span><i className="fa fa-folder-open"/></span>
                        <span className="d-inline-block ml-17">portfolio</span>
                    </Link>
                </li>
                <li onClick={() => clickHandler('contact')} className={active('contact') + "py-14"}>
                    <Link to="/contact">
                        <span><i className="fa fa-envelope-open"/></span>
                        <span className="d-inline-block ml-18">contact</span>
                    </Link>
                </li>
                <li onClick={() => clickHandler('blog')} className={active('blog') + "py-14"}>
                    <Link to="/blog">
                        <span><i className="fa fa-comments"/></span>
                        <span className="d-inline-block ml-20">blog</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        mobileMenuOpened: state.mobileMenuOpened,
        currentPage: state.currentPage
    }
}

export default connect(mapStateToProps, { toggleMobileMenuOpened, setCurrentPage })(MobileNav)