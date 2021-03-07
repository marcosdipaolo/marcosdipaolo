import { MENU_MOBILE_TOGGLE } from './types'

const mobileMenuOpenedReducer = (oldOpened = false, action) => {
    switch (action.type) {
        case MENU_MOBILE_TOGGLE:
            return action.payload
        default:
            return oldOpened
    }
}

export default mobileMenuOpenedReducer