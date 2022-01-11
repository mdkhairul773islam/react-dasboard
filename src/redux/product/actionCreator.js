import actions from "./actions";
import { DataService } from "../../config/dataService/dataService";
const { productBegin, productSuccess, productErr } = actions;

const product = (data, addToast, history) => {
  return async (dispatch) => {
    try {
      dispatch(productBegin());
      const res = await DataService.post("product-store", data);

      if (res.data.success) {
        addToast(res.data.success, { appearance: "success" });
        history.push("/product/all");
      }

      if (res.data.warning) {
        addToast(res.data.warning, { appearance: "warning" });
      }
    } catch (err) {
      dispatch(productErr(err));
      addToast("Product not getting added.", { appearance: "error" });
    }
  };
};

const productList = (addToast) => {
  return async (dispatch) => {
    try {
      dispatch(productBegin());
      const res = await DataService.get("product");
      console.log("res", res);
      dispatch(productSuccess(res.data));
    } catch (err) {
      dispatch(productErr(err));
    }
  };
};

export { product, productList };