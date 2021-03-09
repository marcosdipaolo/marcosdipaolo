import { GET_POSTS } from "./types";

const getPostsReducer = (oldList = [], action) => {
    switch (action.type) {
        case GET_POSTS:
            return action.payload
        default:
            return oldList
    }
}

export default getPostsReducer