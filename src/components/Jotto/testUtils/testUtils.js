import { createStore, applyMiddleware } from "redux";

import rootReducer from "../reducers";
import thunk from "redux-thunk";

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};

export const getByTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
