import { MENU_MOBILE_TOGGLE, CURRENT_PAGE } from "../reducers/types"

export const toggleMobileMenuOpened = opened => ({
    type: MENU_MOBILE_TOGGLE,
    payload: opened
})

export const setCurrentPage = page => ({
    type: CURRENT_PAGE,
    payload: page
})

