import actions from "./actions";

const { SUBCATEGORY_BEGIN, SUBCATEGORY_SUCCESS, SUBCATEGORY_ERR } = actions;

const initState = {
  subCategoryList: [],
  loading: false,
  error: "",
};

/**
 *
 * @todo impure state mutation/explaination
 */

const SubCategory = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SUBCATEGORY_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case SUBCATEGORY_SUCCESS:
      return {
        ...state,
        subCategoryList: data,
        loading: false,
      };
    case SUBCATEGORY_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};
export default SubCategory;
