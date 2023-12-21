import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/normalize.css";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Board from "./pages/board/Board";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
