import { createStore, applyMiddleware } from "redux";

import rootReducer from "../reducers";

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};

export const getByTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
