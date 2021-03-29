import { CHANGE_LANGUAGE } from './types';

const langReducer = (oldLang = 'en', action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return action.payload;
    default:
      return oldLang;
  }
};

export default langReducer;
