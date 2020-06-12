import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";

const client = axios.create({
  baseURL: "https://api.unsplash.com",
  responseType: "json",
});

import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(axiosMiddleware(client)))
);

export default store;
