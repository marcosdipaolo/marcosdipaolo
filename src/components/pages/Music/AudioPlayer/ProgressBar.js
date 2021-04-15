const ProgressBar = ({ tKey, width, onClickProgress }) => (
  <div className={`progress ${tKey}`} onMouseDown={onClickProgress}>
    <div className="progress-bar progress-bar-striped" style={{ width: `${width}%` }} />
  </div>
);

export default ProgressBar;
