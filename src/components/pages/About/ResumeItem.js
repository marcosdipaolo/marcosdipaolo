const ResumeItem = props => {
    return (
        <li className="position-relative pl-60 pr-20 mb-60">
            <div className="icon h-40 w-40 position-absolute">
                <i className={"fa fa-" + props.icon}></i>
            </div>
            <span className="fw-600 mb-20 fs-12 time open-sans-font text-uppercase">{props.time}
            </span>
            <h5 className="fw-500 lh-20 fs-17 mb-10 text-uppercase">{props.role}
                <span className="pl-26 mt-10 place">{props.place}</span>
            </h5>
            <p className="fs-14">{props.description}</p>
        </li>
    )
}

export default ResumeItem