import {connect} from "react-redux"
import {getPosts} from '../../../actions'
import PostPreview from "./PostPreview"
import Nav from "./Nav";
import {Component} from "react";
import thumbnailResolver from './thumbnailResolver'

class Blog extends Component {
    _embedded;
    source_url;
    media_details;
    medium;
    excerpt;
    componentDidMount() {
        this.props.getPosts(1)
    }

    render() {
        return (
            <div className="posts container px-25 st-list">
                <h1 className="big d-none d-sm-block pt-75">my <span>blog</span></h1>
                <p className="title-bg">posts</p>
                <div className="row">
                    {
                        this.props.blog.posts.map(post => {
                                return <PostPreview
                                    id={post.id}
                                    key={post.id}
                                    title={post.title.rendered}
                                    content={post.excerpt.rendered}
                                    thumb={thumbnailResolver(post, 'blog')}
                                />
                            }
                        )
                    }
                </div>
                <Nav/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    blog: state.blog
})

export default connect(mapStateToProps, { getPosts })(Blog)