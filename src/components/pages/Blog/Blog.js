import {connect} from "react-redux"
import {getPosts} from '../../../actions'
import PostPreview from "./PostPreview"
import Nav from "./Nav";
import {Component} from "react";

class Blog extends Component {
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
                                    key={post.id}
                                    title={post.title.rendered}
                                    content={post.excerpt.rendered}
                                    thumb={post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].link : ''}
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