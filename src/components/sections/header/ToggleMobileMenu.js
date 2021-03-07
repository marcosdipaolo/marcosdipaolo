import { connect } from 'react-redux'
import { toggleMobileMenuOpened } from '../../../actions'

const ToggleMobileMenu = props => {
    const onClickHandler = e => {
        props.toggleMobileMenuOpened(!props.mobileMenuOpened)
    }
    return (
        <div
            onClick={onClickHandler}
            className={(props.mobileMenuOpened ? 'opened ' : '') + 
                "d-lg-none toggle-menu position-absolute end-0 pr-30 pt-6"}
        >
            <span className="first d-block mb-5"></span>
            <span className="second d-block mb-5"></span>
            <span className="d-block third mb-5"></span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        mobileMenuOpened: state.mobileMenuOpened
    }
}

export default connect(mapStateToProps, { toggleMobileMenuOpened })(ToggleMobileMenu)