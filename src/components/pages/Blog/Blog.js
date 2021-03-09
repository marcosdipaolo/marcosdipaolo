import { useEffect } from "react"
import { connect } from "react-redux"
import { getPosts } from '../../../actions'
import PostPreview from "./PostPreview"

const Blog = props => {
    useEffect(() => {
        props.getPosts()
    }, [props])
    return (
        <div className="posts container px-25 st-list">
            <div className="row">
                {props.posts.map(post => 
                <PostPreview
                    key={post.id}
                    title={post.title.rendered}
                    content={post.excerpt.rendered}
                    thumb={post._embedded['wp:featuredmedia'][0].link}
                />)}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ posts: state.posts })

export default connect(mapStateToProps, { getPosts })(Blog)