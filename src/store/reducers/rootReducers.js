import todoReducers from "./Reducers";
import { combineReducers } from "redux";
import { reducer as utilsReducer } from "./UtilsReducer";

const rootReducers = combineReducers({
  todoReducers,
  utils: utilsReducer,
});

export default rootReducers;
