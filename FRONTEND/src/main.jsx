import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ContextWrapper from "./Context/ContextWrapper.jsx";
import { Provider } from "react-redux";
import store from "./Store/Store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <ContextWrapper>
        <App />
      </ContextWrapper>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
