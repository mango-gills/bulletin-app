import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CreateNew from "../Pages/CreateArticle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/create" element={<CreateNew />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
