import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Join from "./routes/Join";
import Login from "./routes/Login";
import UserDetail from "./routes/users/UserDetail";
import { RecoilRoot } from "recoil";
import Studio from "./routes/studio/Studio";
import AuthRoutes from "./auth/AuthRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route element={<AuthRoutes />}>
            <Route path="/about/:id" element={<About />}></Route>
            <Route path="/users/:id" element={<UserDetail />}></Route>
            <Route path="/studio/*" element={<Studio />} />
          </Route>
        </Routes>
      </Router>
    </RecoilRoot>
  </React.StrictMode>
);
