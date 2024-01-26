import rootReducer from "@/app/redux/reducers/config/reducer";
import initialState from "@/app/redux/reducers/config/initialState";

const combinedReducer = (state, action) => {
  if (action.type === "LOGOUT_SUCCESS") {
    state = initialState;
  }

  return rootReducer(state, action);
};

export default combinedReducer;
