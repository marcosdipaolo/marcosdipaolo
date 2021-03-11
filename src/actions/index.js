import {MENU_MOBILE_TOGGLE, CURRENT_PAGE, GET_POSTS} from "../reducers/types"
import blog from '../apis/blog'

export const toggleMobileMenuOpened = opened => ({
    type: MENU_MOBILE_TOGGLE,
    payload: opened
})

export const setCurrentPage = page => ({
    type: CURRENT_PAGE,
    payload: page
})

export const getPosts = page => async (dispatch, getState) => {
    const currentPage = getState().blog.currentPage
    if (page === currentPage) {
        return
    }
    const { data, headers } = await blog.get('/wp-json/wp/v2/posts?_embed&per_page=12&page=' + page)
    dispatch({
        type: GET_POSTS,
        payload: {
            posts: data,
            currentPage: page,
            totalPages: headers['x-wp-totalpages']
        }
    })
}

