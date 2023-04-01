import { connect } from 'react-redux';
import { getPosts } from '../../../actions';

const Nav = ({
  blog, getPosts, search,
}) => {
  const buildListData = () => {
    const data = [];
    for (let i = 1; i <= blog.totalPages; i++) {
      data.push({
        number: i,
        active: blog.currentPage === i,
      });
    }
    return data;
  };

  const onClickHandler = (n) => {
    getPosts(null);
    if (search) {
      getPosts(n, search);
    } else {
      getPosts(n);
    }
  };

  return (
    <ul className="icons blog-nav d-block text-center">
      {
            buildListData().map(
              (data) => (
                <li
                  onClick={() => onClickHandler(data.number)}
                  key={data.number}
                  className={`${data.active ? 'active ' : ''}mb-10`}
                >
                  {data.number}
                </li>
              ),
            )
        }
    </ul>
  );
};

const mapStateToProps = (state) => ({
  blog: state.blog,
});

export default connect(mapStateToProps, { getPosts })(Nav);
