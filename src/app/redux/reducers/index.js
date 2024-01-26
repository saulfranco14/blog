import rootReducer from "./config/reducer";
import initialState from "./config/initialState";

const combinedReducer = (state, action) => {
  if (action.type === "LOGOUT_SUCCESS") {
    state = initialState;
  }

  return rootReducer(state, action);
};

export default combinedReducer;
