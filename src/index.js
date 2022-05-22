import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // this variable will be used to display the triangle
root.render(
  <React.StrictMode>
    <App /> // this component will be used to display the triangle
  </React.StrictMode>
);
