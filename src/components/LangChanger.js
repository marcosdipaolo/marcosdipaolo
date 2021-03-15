import {connect} from 'react-redux'
import {changeLanguage} from '../actions'

const LangChanger = ({changeLanguage, currentLanguage}) => {

    const resolveActiveClass = lang => {
        return lang === currentLanguage ? 'active' : ''
    }
    return <div className="language-changer">
        <span onClick={() => changeLanguage('es')} className={resolveActiveClass('es')}>ES</span>
        &nbsp;&nbsp;
        <span onClick={() => changeLanguage('en')}  className={resolveActiveClass('en')}>EN</span>
    </div>
}

const mapStateToProps = state => {
    return {
        currentLanguage: state.currentLanguage
    }
}

export default connect(mapStateToProps, {changeLanguage})(LangChanger)