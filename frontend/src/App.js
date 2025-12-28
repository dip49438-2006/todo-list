import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyNotes from "./pages/MyNotes";
import Navbar from "./components/Navbar";
import "./styles/style.css";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mynotes" element={<MyNotes />} />
  <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
