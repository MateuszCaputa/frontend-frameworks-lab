import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";

/**
 * (Lab 2, Task 2)
 * The main entry point for the React application.
 * Renders the root component <App /> inside <StrictMode> and <BrowserRouter>.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
