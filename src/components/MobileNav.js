import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {toggleMobileMenuOpened, setCurrentPage} from '../actions/index'
import LangChanger from "./LangChanger";
import  {useTranslation} from 'react-i18next'

const MobileNav = ({
   toggleMobileMenuOpened,
   setCurrentPage,
   currentPage,
   mobileMenuOpened
}) => {

    const {t} = useTranslation()
    const clickHandler = page => {
        toggleMobileMenuOpened(false)
        setCurrentPage(page)
    }
    const active = page => {
        return page === currentPage ? 'active ' : ''
    }
    return (
        <nav className={(mobileMenuOpened ? "opened " : "") + "d-lg-none pt-20"}>
            <h2 className="fw-600 text-center">
                <LangChanger/>
            </h2>
            <ul className="p-25 pt-50 mobile-nav list-unstyled list-group text-upper">
                <li onClick={() => clickHandler('home')} className={active('home') + "pb-14"}>
                    <Link to="/">
                        <span><i className="fa fa-home"/></span>
                        <span className="d-inline-block ml-20">{t('nav.items.home')}</span>
                    </Link>
                </li>
                <li onClick={() => clickHandler('about')} className={active('about') + "py-14"}>
                    <Link to="/about">
                        <span><i className="fa fa-user"/></span>
                        <span className="d-inline-block ml-23">{t('nav.items.about')}</span>
                    </Link>
                </li>
                <li onClick={() => clickHandler('projects')} className={active('projects') + "py-14"}>
                    <Link to="/projects">
                        <span><i className="fa fa-folder-open"/></span>
                        <span className="d-inline-block ml-17">{t('nav.items.projects')}</span>
                    </Link>
                </li>
                <li onClick={() => clickHandler('contact')} className={active('contact') + "py-14"}>
                    <Link to="/contact">
                        <span><i className="fa fa-envelope-open"/></span>
                        <span className="d-inline-block ml-18">{t('nav.items.contact')}</span>
                    </Link>
                </li>
                <li onClick={() => clickHandler('music')} className={active('music') + "py-14"}>
                    <Link to="/music">
                        <span><i className="fa fa-music"/></span>
                        <span className="d-inline-block ml-18">{t('nav.items.music')}</span>
                    </Link>
                </li>
                <li onClick={() => clickHandler('blog')} className={active('blog') + "py-14"}>
                    <Link to="/blog">
                        <span><i className="fa fa-comments"/></span>
                        <span className="d-inline-block ml-20">{t('nav.items.blog')}</span>
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

export default connect(mapStateToProps, {toggleMobileMenuOpened, setCurrentPage})(MobileNav)