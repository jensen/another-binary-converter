import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Converter from "components/Converter";

const root = document.getElementById("root");

if (!root) throw new Error("Could not load application");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Converter />
  </React.StrictMode>
);
