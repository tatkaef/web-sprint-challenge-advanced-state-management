// все npm i достатчно сделать в верхнем уровне, не надо в smurfs
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import looger from "redux-logger";
import { smurfsReducer } from "../src/reducers/smurfsReducer";
import "./index.css";
import App from "./components/App";

const store = createStore(smurfsReducer, applyMiddleware(thunk, looger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
