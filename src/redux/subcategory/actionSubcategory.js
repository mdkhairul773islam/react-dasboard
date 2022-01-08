import actions from "./actions";
import { DataService } from "../../config/dataService/dataService";
const { subCategoryBegin, subCategorySuccess, subCategoryErr } = actions;

const subcategory = () => {
  return async (dispatch) => {
    try {
      dispatch(subCategoryBegin());
      const res = await DataService.get("subcategory-list");
      dispatch(subCategorySuccess(res.data));
    } catch (err) {
      dispatch(subCategoryErr(err));
    }
  };
};

export { subcategory };
