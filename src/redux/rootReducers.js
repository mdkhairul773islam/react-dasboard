import { combineReducers } from "redux";
import authReducer from "./authentication/reducers";
import sideBarReducer from "./sideBar/reducers";

export default combineReducers({
  authReducer,
  sideBarReducer,
});
