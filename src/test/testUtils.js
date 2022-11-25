import { createStore, applyMiddleware } from "redux";
import { middlewares } from "../configureStore";

import rootReducer from "../reducers";

export const storeFactory = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware({ ...middlewares })
  );
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
