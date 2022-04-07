import { connect } from 'react-redux';
import { Component } from 'react';
import { withTranslation } from 'react-i18next';
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

  renderCat(cat) {
    switch (cat) {
      case 7:
        return {
          name: this.props.t('pages.blog.categories.development'),
          color: '#3266a8',
        };
      case 3:
        return {
          name: this.props.t('pages.blog.categories.music'),
          color: '#d9462c',
        };
      default:
        return {
          name: this.props.t('pages.blog.categories.music'),
          color: '#d9462c',
        };
    }
  }

  render() {
    return (
      <section className="posts container px-25 st-list">
        <SectionTitle tT="pages.blog.sectionTitle" tBg="pages.blog.titleBg" />
        <div className="position-relative">
          {!this.props.blog.posts.length ? <div style={{ minHeight: '200px' }}><Spinner /></div> : null}
          <div className="row">
            {
                            this.props.blog.posts.map((post) => (
                              <PostPreview
                                cat={this.renderCat(post.categories[0])}
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

export default withTranslation()(connect(mapStateToProps, { getPosts })(Blog));
