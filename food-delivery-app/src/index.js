import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { store } from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  rootElement
);
