import PropTypes from 'prop-types';
import thumbnailResolver from './thumbnailResolver';

const PostData = ({ post }) => {
  const resolveTags = () => {
    const termsArray = post._embedded['wp:term'] ? post._embedded['wp:term'][1] || null : null;
    if (!termsArray) {
      return '';
    }
    return termsArray.map((t) => t.name).join(', ');
  };
  return (
    <div>
      <div className="meta">
        <small>
          <span className="author">
            <i className="fa fa-user" />
            {post?._embedded?.author[0]?.name}
          </span>
          <span className="date">
            <i className="fa fa-calendar" />
            {new Date(post.date).toLocaleDateString()}
          </span>
          <span className="tags">
            <i className="fa fa-tags" />
            {resolveTags()}
          </span>
        </small>
      </div>
      <h2 className="mt-10 mb-25 fw-600" dangerouslySetInnerHTML={{ __html: post?.title?.rendered }} />
      {
        post?._embedded['wp:featuredmedia']
          && <img className="mb-20" src={thumbnailResolver(post, 'full')} alt="post_image" />
      }
      <div className="content" dangerouslySetInnerHTML={{ __html: post?.content?.rendered }} />
    </div>
  );
};

PostData.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.shape({ rendered: PropTypes.string.isRequired }).isRequired,
    categories: PropTypes.arrayOf(PropTypes.number).isRequired,
    comment_status: PropTypes.string,
    content: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
      protected: PropTypes.bool,
    })
      .isRequired,
    date: PropTypes.string,
    excerpt: PropTypes.shape({ rendered: PropTypes.string, protected: PropTypes.bool }),
    format: PropTypes.string,
    guid: PropTypes.shape({ rendered: PropTypes.string }),
    id: PropTypes.number,
    link: PropTypes.string,
    slug: PropTypes.string,
    status: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.number),
    template: PropTypes.string,
    type: PropTypes.string,
    _embedded: PropTypes.shape({
      author: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
      })),
      'wp:featuredmedia': PropTypes.arrayOf(PropTypes.shape({
        media_details: PropTypes.shape({
          sizes: PropTypes.shape({
            medium: PropTypes.shape({
              source_url: PropTypes.string,
            }),
            blog: PropTypes.shape({
              source_url: PropTypes.string,
            }),
            full: PropTypes.shape({
              source_url: PropTypes.string,
            }),
            medium_large: PropTypes.shape({
              source_url: PropTypes.string,
            }),
            portada: PropTypes.shape({
              source_url: PropTypes.string,
            }),
            thumbnail: PropTypes.shape({
              source_url: PropTypes.string,
            }),
          }),
        }),
      })),
    }).isRequired,
  }).isRequired,
};

export default PostData;
