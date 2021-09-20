import { combineReducers } from 'redux'
import userReducer from "./userReducer";
import userListReducer from "./userListRedueer";


export default combineReducers({
    userReducer,
    userListReducer,
})