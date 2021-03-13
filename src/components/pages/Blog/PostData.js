import thumbnailResolver from "./thumbnailResolver";

const PostData = ({post}) => {

    const resolveTags = () => {
        const termsArray = post._embedded['wp:term'] ? post._embedded['wp:term'][1] || null : null
        if (!termsArray) {
            return ''
        }
        return termsArray.map(t => t.name).join(', ')
    }
    return (
        <div>
            <div className="meta">
                <small>
                            <span className="author">
                                <i className="fa fa-user"/>
                                {post._embedded.author[0].name}
                            </span>
                    <span className="date">
                                <i className="fa fa-calendar"/>
                        {new Date(post.date).toLocaleDateString()}
                            </span>
                    <span className="tags">
                                <i className="fa fa-tags"/>
                        {resolveTags()}
                            </span>
                </small>
            </div>
            <h2 className="mt-10 mb-25 fw-600" dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
            <img className={"mb-20"} src={thumbnailResolver(post, 'full')} alt={'post_image'}/>
            <div className="content" dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
        </div>
    )
}

export default PostData