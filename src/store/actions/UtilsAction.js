import axios from "axios";
import { SET_DEPARTMENTS, SET_ERROR } from "./UtilTypes";
import { formatDepartments } from "../../utils/options";
import { urls } from "src/api/ulrs";

const setDepartments = (data) => ({
  type: SET_DEPARTMENTS,
  payload: data,
});

const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const getDepartments = () => async (dispatch) => {
  try {
    const { data } = await axios(urls.getDepartments);
    dispatch(setDepartments(formatDepartments(data)));
  } catch (error) {
    dispatch(setError(error));
  }
};
