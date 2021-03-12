import {connect} from 'react-redux'
import {getPost} from "../../../actions";
import {useEffect} from 'react'
import thumbnailResolver from "./thumbnailResolver";

const SinglePost = ({post, match, getPost, currentPage}) => {
    useEffect(() => {
        getPost(match.params.id)
        return () => {
            getPost(null)
        }
    }, [getPost, match.params.id])

    const resolveTags = () => {
        const termsArray = post._embedded['wp:term'] ? post._embedded['wp:term'][1] || null : null
        if (!termsArray) {
            return ''
        }
        return termsArray.map(t => t.name).join(', ')
    }
    if (!post || !post._embedded) {
        return ''
    }
    return (
        <section className="container px-25 single-post pt-25">
            <h1 className='big d-none d-sm-block mt-60'>my <span>blog</span></h1>
            <p className="title-bg d-none d-sm-block">posts</p>
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
            <img className={"mb-20"} src={thumbnailResolver(post, 'portada')} alt={'post_image'}/>
            <div className="content" dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
        </section>
    )
}

const mapStateToProps = state => ({post: state.post, currentPage: state.currentPage})

export default connect(mapStateToProps, {getPost})(SinglePost)