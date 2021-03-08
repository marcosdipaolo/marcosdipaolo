import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentPage } from '../../actions'

const Home = props => {
    const onClickHandler = page => {
        props.setCurrentPage(page)
    }
    return (
        <section className="container-fluid home p-25">
            <div>
                <h6 className="text-upper pb-15">hi there!</h6>
                <h1 className="mb-10">I'm <span>Marcos Di Paolo</span></h1>
                <p className="fs-14 lh-28">I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                <Link to="/about"><span onClick={() => onClickHandler('about')} className="mdp-btn mt-15">more about me</span></Link>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({ currentPage: state.currentPage })

export default connect(mapStateToProps, { setCurrentPage })(Home)