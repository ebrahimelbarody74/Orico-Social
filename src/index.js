import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DarkMdeContextProvider } from "./context/darkModeContext";
import { AuthContextProvider } from "./context/authContext";
import { Provider } from "react-redux";
import { store } from "./rtk/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <DarkMdeContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </DarkMdeContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals