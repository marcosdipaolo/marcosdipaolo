import {Link} from 'react-router-dom'

const PostPreview = props => {
    const parseContent = () => {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = props.content;
        return (tmp.textContent || tmp.innerText || "").substr(0, 60);
    }
    return (
        <div className="post col-12 col-md-6 mt-30 col-xl-4 mb-30">
            <article style={{height: '100%'}}>
                <Link to={`/blog/${props.id}`}>
                    <div className="thumb" style={{backgroundImage: `url(${props.thumb})`}}/>
                </Link>
                <div className="content p-25">
                    <Link to={`/blog/${props.id}`}>
                        <div className="title mb-15">
                            <h3 dangerouslySetInnerHTML={{__html: props.title.substr(0, 40) + '...'}}/>
                        </div>
                    </Link>
                    <div className="body" dangerouslySetInnerHTML={{__html: parseContent() + '...'}}>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default PostPreview