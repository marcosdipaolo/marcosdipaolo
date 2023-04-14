import {
  MENU_MOBILE_TOGGLE, CURRENT_PAGE, GET_POSTS, GET_POST, CHANGE_LANGUAGE, SET_PLAYING_TRACK,
} from '../reducers/types';
import blog from '../apis/blog';

export const toggleMobileMenuOpened = (opened) => ({
  type: MENU_MOBILE_TOGGLE,
  payload: opened,
});

export const setCurrentPage = (page) => ({
  type: CURRENT_PAGE,
  payload: page,
});

export const getPost = (id) => async (dispatch) => {
  if (!id) {
    dispatch({
      type: GET_POST,
      payload: null,
    });
    return;
  }
  const { data } = await blog.get(`/api/posts/${id}?_embed`);
  dispatch({
    type: GET_POST,
    payload: data,
  });
};

export const getPosts = (page, search = '') => async (dispatch, getState) => {
  if (!page) {
    dispatch({
      type: GET_POSTS,
      payload: {
        posts: [],
        currentPage: 0,
        totalPages: 0,
      },
    });
    return;
  }
  const { currentPage } = getState().blog;
  if (page === currentPage) {
    return;
  }
  const url = `/api/posts?perPage=12&page=${page}&search=${search}`;
  const { data, headers } = await blog.get(url);
  console.log(headers);
  dispatch({
    type: GET_POSTS,
    payload: {
      posts: data.posts,
      currentPage: page,
      totalPages: data['X-Wp-TotalPages'],
    },
  });
};

export const changeLanguage = (lang) => ({
  type: CHANGE_LANGUAGE,
  payload: lang,
});

export const setPlayingTrack = (track) => ({
  type: SET_PLAYING_TRACK,
  payload: track,
});
