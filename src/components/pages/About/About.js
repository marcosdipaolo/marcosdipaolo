import Achievements from "./Achievements"
import EducationXP from "./EducationXP"
import ProfileData from "./ProfileData"
import Skills from "./Skills"

const About = () => {
    return <section className="about container">
        <h1 className="big mt-80 d-none d-sm-block">about <span>me</span></h1>
        <p className="title-bg">resume</p>
        <div className="row">
            <div className="col-12 col-lg-5 col-xl-6">
                <h3 className="col-12 text-upper my-23">personal infos</h3>
                <div className="image-container col-12 d-block d-sm-none px-10 mb-25">
                    <img src={"/images/portrait-mobile.jpg"} alt=""/>
                </div>
                <ProfileData/>
            </div>
            <Achievements/>
        </div>
        <Skills/>
        <EducationXP/>
    </section>
}

export default About