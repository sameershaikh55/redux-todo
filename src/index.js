import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

// REDUX
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
