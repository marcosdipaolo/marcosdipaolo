import { combineReducers } from 'redux'
import mobileMenuOpened from './mobileMenuOpenedReducer'
import currentPage from './currentPageReducer'
import posts from './getPostsReducer'

export default combineReducers({
    mobileMenuOpened, currentPage, posts
})