import actions from "./actions";
import { DataService } from "../../config/dataService/dataService";
const { productBegin, productSuccess, productErr } = actions;

const product = (data) => {
  return async (dispatch) => {
    try {
      dispatch(productBegin());
      const res = await DataService.post("product-store", data);
      dispatch(productSuccess(res.data));
    } catch (err) {
      dispatch(productErr(err));
    }
  };
};

export { product };
