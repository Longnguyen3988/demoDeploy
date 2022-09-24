import { localServ } from "../../services/localService";
import { SET_USER } from "../constants/constantUser";

let initialState = {
  userInfor: localServ.user.get(),
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      state.userInfor = action.payload;
      return { ...state };

    default:
      return state;
      break;
  }
};
