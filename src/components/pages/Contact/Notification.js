const Notification = ({ status, show, message }) => (
  <div
    className={`notification px-20 ${show ? 'visible' : ''}`}
    style={{
      // eslint-disable-next-line no-nested-ternary
      backgroundColor: status === 'success' ? '#00807a9e' : '#ff000066',
      display: 'flex',
    }}
  >
    <p style={{ margin: 'auto' }}>{message}</p>
  </div>
);

export default Notification;
