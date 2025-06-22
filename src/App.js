import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Calculator from "./components/Calculator";
import CountryDetails from "./components/CountryDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/details" element={<CountryDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
