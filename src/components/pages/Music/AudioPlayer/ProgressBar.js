const ProgressBar = ({ width }) => (
  <div className="progress">
    <div className="progress-bar" style={{ width: `${width}%` }} />
  </div>
);

export default ProgressBar;
