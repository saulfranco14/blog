import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "@/app/redux/reducers";

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  });

const wrapper = createWrapper(makeStore);

export { wrapper };
