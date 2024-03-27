import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/normalize.css";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    <Analytics />
  </BrowserRouter>,
);
