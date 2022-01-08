const actions = {
  SUBCATEGORY_BEGIN: "SUBCATEGORY_BEGIN",
  SUBCATEGORY_SUCCESS: "SUBCATEGORY_SUCCESS",
  SUBCATEGORY_ERR: "SUBCATEGORY_ERR",

  subCategoryBegin: () => {
    return {
      type: actions.SUBCATEGORY_BEGIN,
    };
  },

  subCategorySuccess: (data) => {
    return {
      type: actions.SUBCATEGORY_SUCCESS,
      data,
    };
  },

  subCategoryErr: (err) => {
    return {
      type: actions.SUBCATEGORY_ERR,
      err,
    };
  },
};

export default actions;
