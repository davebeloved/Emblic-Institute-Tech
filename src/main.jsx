import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { StateContextProvider } from "./context/contextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Provider store={store}>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Provider>
  </HashRouter>
);
