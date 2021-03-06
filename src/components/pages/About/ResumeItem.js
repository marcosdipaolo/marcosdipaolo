const ResumeItem = ({
  icon, time, role, place, description,
}) => (
  <li className="resume-item position-relative pl-60 pr-20 mb-60">
    <div className="icon h-40 w-40 position-absolute">
      <i className={`fa fa-${icon}`} />
    </div>
    <span className="fw-600 mb-20 fs-12 time open-sans-font text-uppercase">
      {time}
    </span>
    <h5 className="fw-500 lh-20 fs-17 mb-10 text-uppercase">
      {role}
      <span className="pl-26 mt-10 place">{place}</span>
    </h5>
    <p className="fs-14 description">{description}</p>
  </li>
);

export default ResumeItem;
