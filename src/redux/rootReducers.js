import { combineReducers } from "redux";
import authReducer from "./authentication/reducers";
import sideBarReducer from "./sideBar/reducers";
import categoryReducer from "./category/reducers";
import brandReducer from "./brand/reducers";
import unitReducer from "./unit/reducers";

export default combineReducers({
  authReducer,
  sideBarReducer,
  categoryReducer,
  brandReducer,
  unitReducer
});
