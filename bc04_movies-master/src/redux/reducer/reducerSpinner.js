import { SET_LOADING_OFF, SET_LOADING_ON } from "../constants/constantSpinner";

let initalState = {
  isLoading: false,
};

export const spinnerReducer = (state = initalState, { type, payloaed }) => {
  switch (type) {
    case SET_LOADING_ON: {
      return { ...state, isLoading: true };
    }
    case SET_LOADING_OFF: {
      return { ...state, isLoading: false };
    }

    default:
      return state;
  }
};
