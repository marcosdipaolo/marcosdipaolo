import { MENU_MOBILE_TOGGLE, CURRENT_PAGE, GET_POSTS } from "../reducers/types"
import blog from '../apis/blog'

export const toggleMobileMenuOpened = opened => ({
    type: MENU_MOBILE_TOGGLE,
    payload: opened
})

export const setCurrentPage = page => ({
    type: CURRENT_PAGE,
    payload: page
})

export const getPosts = () => async dispatch => {
    const { data } = await blog.get('/wp-json/wp/v2/posts?_embed&per_page=9')
    dispatch({type: GET_POSTS, payload: data})
}

