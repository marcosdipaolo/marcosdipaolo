const Contact = props => {
    return (
        <section className="container contact pt-20 px-25">
            <h3 className="text-upper mb-20">dont't by shy</h3>
            <p className="fs-14">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <p className="position-relative fs-14 my-20 px-50">
                <i className="color-primary fs-33  fa fa-envelope-open position-absolute" aria-hidden="true"></i>
                <span className="text-upper d-block fs-14 title">mail me</span>
                <span className="fw-600">{'marcosdipaolo{at}gmail.com'}</span>
            </p>
            <p className="position-relative fs-14 px-50">
                <i className="color-primary fs-38  fa fa-phone-square position-absolute" aria-hidden="true"></i>
                <span className="text-upper d-block fs-14 title">call me</span>
                <span className="fw-600">+54 9 11 4145 1155</span>
            </p>
            <ul className="social mb-50">
                <li className="w-40 h-40 d-inline-block"><a href="https://github.com/marcosdipaolo"><i className="fa fa-github"></i></a></li>
                <li className="w-40 h-40 d-inline-block"><a href="https://www.linkedin.com/in/marcos-di-paolo/"><i className="fa fa-linkedin"></i></a></li>
            </ul>
            <input id="name" className="mb-20 pl-30" type="text" placeholder="YOUR NAME"/>
            <input id="email" className="mb-20 pl-30" type="text" placeholder="YOUR EMAIL"/>
            <input id="subject" className="mb-20 pl-30" type="text" placeholder="THE SUBJECT"/>
            <textarea className="mb-20 pt-20 pl-30" placeholder="YOUR MESSAGE"></textarea>
            <button className="mdp-btn mb-20">send message</button>
        </section>
    )
}

export default Contact