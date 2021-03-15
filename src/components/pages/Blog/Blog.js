import {connect} from "react-redux"
import {getPosts} from '../../../actions'
import PostPreview from "./PostPreview"
import Nav from "./Nav";
import {Component} from "react";
import thumbnailResolver from './thumbnailResolver'
import Spinner from "../../Spinner";
import SectionTitle from "../../SectionTitle";

class Blog extends Component {
    _embedded;
    source_url;
    media_details;
    medium;
    excerpt;

    componentDidMount() {
        this.props.getPosts(this.props.blog.currentPage || 1)
    }

    render() {
        return (
            <div className="posts container px-25 st-list">
                <SectionTitle tT="pages.blog.sectionTitle" tBg="pages.blog.titleBg"/>
                <div className="position-relative">
                    {!this.props.blog.posts.length ? <Spinner/> : null}
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
            </div>
        )
    }
}

const mapStateToProps = state => ({
    blog: state.blog
})

export default connect(mapStateToProps, {getPosts})(Blog)