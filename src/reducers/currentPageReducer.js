import { CURRENT_PAGE } from './types'

export default (oldPage = 'home', action) => {
    switch (action.type) {
        case CURRENT_PAGE:
            return action.payload
        default:
            return oldPage
    }
}