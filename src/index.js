import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div className="flex gap-2">
        <span>
          <Link to="/"> App</Link>
        </span>
        <span>
          <Link to="/home"> Home</Link>
        </span>
        <span>
          <Link to="/about"> About</Link>
        </span>
      </div>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
