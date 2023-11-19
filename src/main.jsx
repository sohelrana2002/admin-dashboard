import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeProvider } from "./context/DarkModeContext";
import { FirebaseContextProvider } from "./context/FirebaseContext";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <FirebaseContextProvider>
        <App />
      </FirebaseContextProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
