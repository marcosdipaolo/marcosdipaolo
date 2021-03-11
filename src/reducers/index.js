import { combineReducers } from 'redux'
import mobileMenuOpened from './mobileMenuOpenedReducer'
import currentPage from './currentPageReducer'
import blog from './blogReducer'

export default combineReducers({
    mobileMenuOpened, currentPage, blog
})