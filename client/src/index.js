import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Chakra } from "../src/Chakra";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <Chakra startAppName={<App />}/>
    </BrowserRouter>
  </>
);
