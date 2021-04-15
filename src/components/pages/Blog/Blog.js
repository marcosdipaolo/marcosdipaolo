import { connect } from 'react-redux';
import { Component } from 'react';
import { getPosts } from '../../../actions';
import PostPreview from './PostPreview';
import Nav from './Nav';
import thumbnailResolver from './thumbnailResolver';
import Spinner from '../../Spinner';
import SectionTitle from '../../SectionTitle';

class Blog extends Component {
  componentDidMount() {
    this.props.getPosts(this.props.blog.currentPage || 1);
  }

  render() {
    return (
      <section className="posts container px-25 st-list">
        <SectionTitle tT="pages.blog.sectionTitle" tBg="pages.blog.titleBg" />
        <div className="position-relative">
          {!this.props.blog.posts.length ? <Spinner /> : null}
          <div className="row">
            {
                            this.props.blog.posts.map((post) => (
                              <PostPreview
                                id={post.id}
                                key={post.id}
                                title={post.title.rendered}
                                content={post.excerpt.rendered}
                                thumb={thumbnailResolver(post, 'blog')}
                              />
                            ))
                        }
          </div>
          <Nav />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  blog: state.blog,
});

export default connect(mapStateToProps, { getPosts })(Blog);
