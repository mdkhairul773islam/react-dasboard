import { combineReducers } from 'redux'
import userReducer from "./reducers/userReducer";
import userListReducer from "./reducers/userListReducer";
import sideBarReducer from "./reducers/sideBarReducer";

import authReducer from './authentication/reducers';

export default combineReducers({
    userReducer,
    userListReducer,
    sideBarReducer,

    authReducer,
})