import { MENU_MOBILE_TOGGLE } from './types'

export default (oldOpened = false, action) => {
    switch (action.type) {
        case MENU_MOBILE_TOGGLE:
            return action.payload
        default:
            return oldOpened
    }
}