import {GET_POST} from "./types";

const postReducer = (oldPost = {}, action) => {
    switch (action.type) {
        case GET_POST:
            return action.payload
        default:
            return oldPost
    }
}

export default postReducer