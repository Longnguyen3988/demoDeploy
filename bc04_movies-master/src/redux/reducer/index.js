import { combineReducers } from "redux";
import { spinnerReducer } from "./reducerSpinner";
import { userReducer } from "./reducerUser";

export let rootReduce = combineReducers({
  userReducer,
  spinnerReducer,
});
