/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from "./pages/MainContent";
import EdukaDetail from "./pages/EdukaDetail";
import KasihIbuDetail from "./pages/KasihIbuDetail";
import MaqdisDetail from "./pages/MaqdisDetail";

// Modify your App.js
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/portfolio/eduka" element={<EdukaDetail />} />
        <Route path="/portfolio/kasihibu" element={<KasihIbuDetail />} />
        <Route path="/portfolio/maqdis" element={<MaqdisDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
