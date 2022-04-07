import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPost } from '../../../actions';
import PostData from './PostData';
import Spinner from '../../Spinner';
import SectionTitle from '../../SectionTitle';

const SinglePost = ({
  post, match, getPost,
}) => {
  useEffect(() => {
    getPost(match.params.id);
    return () => {
      getPost(null);
    };
  }, [getPost, match.params.id]);
  return (
    <section className="container px-25 single-post pt-25 position-relative">
      <Link to="/blog">
        <i className="fa fa-arrow-left" />
      </Link>
      <SectionTitle tT="pages.blog.sectionTitle" tBg="pages.blog.titleBg" />
      {(post && post._embedded) ? <PostData post={post} />
        : (
          <div className="position-relative" style={{ minHeight: '200px' }}>
            <Spinner />
          </div>
        )}
    </section>
  );
};

const mapStateToProps = (state) => ({ post: state.post });

export default connect(mapStateToProps, { getPost })(SinglePost);
