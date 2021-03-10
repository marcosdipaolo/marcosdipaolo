import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setCurrentPage, getPosts} from '../../actions'

const Home = props => {
    const onClickHandler = page => {
        props.setCurrentPage(page)
        props.getPosts()
    }
    return (
        <section className="container-fluid home p-25">
            <div className="color-block position-fixed"/>
            <div className="row">
                <div
                    className="col-lg-4 bg position-fixed d-none d-lg-block img"
                    style={{backgroundImage: 'url(/images/portrait_big.jpg)'}}
                />
                <div className="content col-12 col-lg-8 offset-lg-4 text-left text-sm-center text-lg-start d-flex">
                    <div className="text m-auto">
                        <h6 className="text-upper pb-15 fs-24">hi there!</h6>
                        <h1 className="mb-10 fs-48">I'm <span>Marcos Di Paolo</span></h1>
                        <p className="fs-18 lh-32 mb-10">I'm a Tunisian based web designer & front‑end developer focused on
                            crafting clean & user‑friendly experiences, I am passionate about building excellent
                            software that improves the lives of those around me.</p>
                        <Link to="/about"><span onClick={() => onClickHandler('about')} className="mdp-btn mt-15">more about me</span></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({currentPage: state.currentPage, posts: state.posts})

export default connect(mapStateToProps, {setCurrentPage, getPosts})(Home)