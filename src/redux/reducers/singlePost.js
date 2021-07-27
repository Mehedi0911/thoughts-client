import { GET_ID } from "../constants/actionTypes";
export const singlePost = (singlePost=null, action) => {
    switch (action.type) {
        case GET_ID:
            return action.payload;
        default:
            return singlePost;    }
}