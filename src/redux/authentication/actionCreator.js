import actions from "./actions";
import { DataService } from "../../config/dataService/dataService";
const {
  loginBegin,
  loginSuccess,
  loginErr,
  logoutBegin,
  logoutSuccess,
  logoutErr,
} = actions;

const login = (userLoginData) => {
  return async (dispatch) => {
    try {
      dispatch(loginBegin());
      window.localStorage.setItem("isLoggedin", true);
      const res = await DataService.post("login", userLoginData);
      if (res.data.token !== undefined) {
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("isLoggedin", true);
      } else {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("isLoggedin");
      }

      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const logOut = () => {
  return async (dispatch) => {
    try {
      dispatch(logoutBegin());
      window.localStorage.removeItem("isLoggedin");
      dispatch(logoutSuccess(null));
      window.localStorage.removeItem("token");
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

export { login, logOut };
