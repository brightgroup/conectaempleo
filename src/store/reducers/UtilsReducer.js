import { SET_DEPARTMENTS, SET_ERROR } from "../actions/UtilTypes";

const initialState = {
  departments: [],
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEPARTMENTS:
      return {
        ...state,
        departments: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
