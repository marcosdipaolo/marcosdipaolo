import {MENU_MOBILE_TOGGLE, CURRENT_PAGE, GET_POSTS, GET_POST, CHANGE_LANGUAGE} from "../reducers/types"
import blog from '../apis/blog'

export const toggleMobileMenuOpened = opened => ({
    type: MENU_MOBILE_TOGGLE,
    payload: opened
})

export const setCurrentPage = page => ({
    type: CURRENT_PAGE,
    payload: page
})

export const getPost = id => async (dispatch) => {
    if (!id) {
        dispatch({
            type: GET_POST,
            payload: null
        })
        return
    }
    const {data} = await blog.get(`/wp-json/wp/v2/posts/${id}?_embed`)
    dispatch({
        type: GET_POST,
        payload: data
    })
}

export const getPosts = page => async (dispatch, getState) => {
    if (!page) {
        dispatch({
            type: GET_POSTS,
            payload: {
                posts: [],
                currentPage: 0,
                totalPages: 0
            }
        })
        return
    }
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

export const changeLanguage = (lang) => {
    return {
        type: CHANGE_LANGUAGE,
        payload: lang
    }
}
