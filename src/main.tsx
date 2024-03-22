import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/user.ts";
import timeReducer from "./features/time.ts";
import "./index.css";

const store = configureStore({
  reducer: {
    user: userReducer,
    time: timeReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
