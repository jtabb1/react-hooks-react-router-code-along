// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);


/*

touch src/index.js
touch src/components/App.js
touch src/components/Home.js
touch src/components/About.js
touch src/components/Login.js
touch src/components/NavBar.js

*/