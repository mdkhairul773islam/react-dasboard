import { combineReducers } from "redux";
import authReducer from "./authentication/reducers";
import sideBarReducer from "./sideBar/reducers";
import categoryReducer from "./category/reducers";
import subCategoryReducer from "./subcategory/reducers";
import brandReducer from "./brand/reducers";
import unitReducer from "./unit/reducers";

export default combineReducers({
  authReducer,
  sideBarReducer,
  categoryReducer,
  subCategoryReducer,
  brandReducer,
  unitReducer
});
