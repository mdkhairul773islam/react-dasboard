const actions = {
  PRODUCT_BEGIN: "PRODUCT_BEGIN",
  PRODUCT_SUCCESS: "PRODUCT_SUCCESS",
  PRODUCT_ERR: "PRODUCT_ERR",

  productBegin: () => {
    return {
      type: actions.PRODUCT_BEGIN,
    };
  },

  productSuccess: (data) => {
    return {
      type: actions.PRODUCT_SUCCESS,
      data,
    };
  },

  productErr: (err) => {
    return {
      type: actions.PRODUCT_ERR,
      err,
    };
  },
};

export default actions;
