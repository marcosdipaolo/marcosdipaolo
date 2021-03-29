import { GET_POSTS } from './types';

const initialSate = {
  posts: [],
  currentPage: 0,
  totalPages: 0,
};

const blogReducer = (oldList = initialSate, action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    default:
      return oldList;
  }
};

export default blogReducer;
