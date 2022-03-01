import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "../src/pages/home/Home";
import ApplicationList from "./pages/applicationList/ApplicationList";
import "./app.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/applications" element={<ApplicationList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
