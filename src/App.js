import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import React from "react";

import Home from "./Home";
import Gallery from "./Gallery";
import Donation from "./Donation";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donation" element={<Donation />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
