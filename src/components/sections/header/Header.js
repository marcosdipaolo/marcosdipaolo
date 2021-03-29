import { connect } from 'react-redux';

const Header = (props) => {
  const resolveHeader = () => {
    switch (props.currentPage) {
      case 'about':
        return (
          <h1>
            about
            <span>me</span>
          </h1>
        );
      case 'projects':
        return (
          <h1>
            my
            <span>projects</span>
          </h1>
        );
      case 'contact':
        return (
          <h1>
            get in
            <span>touch</span>
          </h1>
        );
      case 'music':
        return (
          <h1>
            my
            <span>music</span>
          </h1>
        );
      case 'blog':
        return (
          <h1>
            my
            <span>blog</span>
          </h1>
        );
      default:
        return '';
    }
  };
  return (
    <section className="d-sm-none header h-60 pt-15 pl-25">
      {resolveHeader()}
    </section>
  );
};

const mapStateToProps = (state) => ({ currentPage: state.currentPage });

export default connect(mapStateToProps)(Header);
