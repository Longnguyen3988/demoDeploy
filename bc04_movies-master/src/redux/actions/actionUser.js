import { localServ } from "../../services/localService";
import { userServ } from "../../services/userService";
import { SET_USER } from "../constants/constantUser";

const setUserLoginSuccess = (susccessValue) => {
  return {
    type: SET_USER,
    payload: susccessValue,
  };
};

export const setUserLoginActionServ = (
  dataLogin,
  onLoginSuccess,
  onLoginFail
) => {
  return (dispatch) => {
    userServ
      .postLogin(dataLogin)
      .then((res) => {
        localServ.user.set(res.data.content);
        onLoginSuccess();
        dispatch(setUserLoginSuccess(res.data.content));
      })
      .catch((err) => {
        onLoginFail();
        console.log(err);
      });
  };
};
