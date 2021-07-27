import { combineReducers } from "redux";

import { singlePost } from "./singlePost";
import { postsReducer } from "./posts";
import authReducer from "./auth";

export default combineReducers({
    posts: postsReducer,
    singlePost: singlePost,
    profile: authReducer,
})