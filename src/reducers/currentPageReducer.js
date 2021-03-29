import { CURRENT_PAGE } from './types';

const currentPageReducer = (oldPage = 'home', action) => {
  switch (action.type) {
    case CURRENT_PAGE:
      return action.payload;
    default:
      return oldPage;
  }
};

export default currentPageReducer;
