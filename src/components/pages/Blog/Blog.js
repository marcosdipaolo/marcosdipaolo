import {connect} from "react-redux"
import {getPosts} from '../../../actions'
import PostPreview from "./PostPreview"
import Nav from "./Nav";
import {Component} from "react";

class Blog extends Component {
    componentDidMount() {
        this.props.getPosts(1)
    }
    thumbnailResolver(post){
        let thumb = ''
        if(post._embedded['wp:featuredmedia']) {
            const size = post._embedded['wp:featuredmedia'][0].media_details.sizes.blog ||
                post._embedded['wp:featuredmedia'][0].media_details.sizes.medium
            thumb = size.source_url
        }
        return thumb
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
                                    key={post.id}
                                    title={post.title.rendered}
                                    content={post.excerpt.rendered}
                                    thumb={this.thumbnailResolver(post)}
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