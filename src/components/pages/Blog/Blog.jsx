import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';
import { getPosts } from '../../../actions';
import PostPreview from './PostPreview';
import Nav from './Nav';
import thumbnailResolver from './thumbnailResolver';
import Spinner from '../../Spinner';
import SectionTitle from '../../SectionTitle';

const Blog = ({
  blog, getPosts, t,
}) => {
  const [isSearch, setIsSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [showBackToPostsButton, setShowBackToPostsButton] = useState(false);

  useEffect(() => {
    getPosts(blog.currentPage || 1);
  }, []);

  useEffect(() => {
    let posts;
    if (isSearch) {
      posts = setTimeout(() => {
        getPosts(null);
        setShowBackToPostsButton(!(searchValue === ''));
        getPosts(1, searchValue);
      }, 1000);
    }
    return () => clearTimeout(posts);
  }, [searchValue]);

  const renderCat = (cat) => {
    switch (cat) {
      case 7:
        return {
          name: t('pages.blog.categories.development'),
          color: '#3266a8',
        };
      case 3:
        return {
          name: t('pages.blog.categories.music'),
          color: '#d9462c',
        };
      default:
        return {
          name: t('pages.blog.categories.music'),
          color: '#d9462c',
        };
    }
  };

  const onSearchChangeHandler = (e) => {
    setIsSearch(true);
    setSearchValue(e.target.value);
  };

  const backToPosts = () => {
    setIsSearch(false);
    setSearchValue('');
    setShowBackToPostsButton(false);
    getPosts(null);
    getPosts(1);
  };

  return (
    <section className="posts container px-25 st-list">
      <SectionTitle tT="pages.blog.sectionTitle" tBg="pages.blog.titleBg" />
      <div className="search-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1"><i className="fa fa-search" /></span>
        </div>
        <input
          type="text"
          className="search form-control"
          placeholder={t('pages.blog.searchPlaceholder')}
          aria-label={t('pages.blog.searchPlaceholder')}
          aria-describedby="basic-addon1"
          onKeyDown={onSearchChangeHandler}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </div>
      <div className="position-relative">
        {!blog.posts.length ? <div style={{ minHeight: '200px' }}><Spinner /></div> : null}
        <Nav search={searchValue} />
        {showBackToPostsButton && <p className="mdp-btn pointer" onClick={backToPosts}>{t('pages.blog.backToPosts')}</p>}
        <div className="row">
          {
            blog.posts.map((post) => (
              <PostPreview
                cat={renderCat(post?.categories[0])}
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
};

const mapStateToProps = (state) => ({
  blog: state.blog,
});

export default withTranslation()(connect(mapStateToProps, { getPosts })(Blog));
