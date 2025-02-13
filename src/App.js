import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import AggieWorks from "./aggieworks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/aggieworks" element={<AggieWorks />} />
      </Routes>    
    </Router>
  );
}

export default App;
