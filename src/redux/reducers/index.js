import { combineReducers } from 'redux'
import userReducer from "./userReducer";
import userListReducer from "./userListReducer";
import sideBarReducer from "./sideBarReducer";


export default combineReducers({
    userReducer,
    userListReducer,
    sideBarReducer,
})