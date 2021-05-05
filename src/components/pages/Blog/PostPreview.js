import { Link } from 'react-router-dom';

const PostPreview = ({
  content, id, thumb, title, cat,
}) => {
  const parseContent = () => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = content;
    return (tmp.textContent || tmp.innerText || '').substr(0, 60);
  };
  return (
    <div className="post col-12 col-md-6 mt-30 col-xl-4 mb-30">
      <article style={{ height: '100%' }}>
        <Link to={`/blog/${id}`}>
          <div className="thumb" style={{ backgroundImage: `url(${thumb})` }}>
            <span className="category" style={{ backgroundColor: cat.color }}>{cat.name}</span>
          </div>
        </Link>
        <div className="content p-25">
          <Link to={`/blog/${id}`}>
            <div className="title mb-15">
              <h3 dangerouslySetInnerHTML={{ __html: `${title.substr(0, 40)}...` }} />
            </div>
          </Link>
          <div className="body" dangerouslySetInnerHTML={{ __html: `${parseContent()}...` }} />
        </div>
      </article>
    </div>
  );
};

export default PostPreview;
