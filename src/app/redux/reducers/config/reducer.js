import { combineReducers } from "redux";
import loginReducer from "../login";
import userReducer from "../user";
import blogEntrieReducer from "../blogEntrie";

const reducers = {
  blogEntrie: blogEntrieReducer,
  login: loginReducer,
  user: userReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
