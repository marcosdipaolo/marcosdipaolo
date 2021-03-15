import { combineReducers } from 'redux'
import mobileMenuOpened from './mobileMenuOpenedReducer'
import currentPage from './currentPageReducer'
import blog from './blogReducer'
import post from './postReducer'
import currentLanguage from './languageReducer'

export default combineReducers({
    mobileMenuOpened, currentPage, blog, post, currentLanguage
})