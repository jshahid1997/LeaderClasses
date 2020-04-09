import { createStore, combineReducers, applyMiddleware } from "redux";

import { Ceo } from "./ceo";
import { ECeo } from "./eceo";

import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      ceo: Ceo,
      eceo: ECeo,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
