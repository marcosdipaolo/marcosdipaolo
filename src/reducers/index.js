import { combineReducers } from 'redux'
import mobileMenuOpened from './mobileMenuOpenedReducer'
import currentPage from './currentPageReducer'

export default combineReducers({
    mobileMenuOpened, currentPage
})