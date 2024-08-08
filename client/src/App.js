import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Adjusters from './components/Adjusters';
import Claims from './components/Claims';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adjusters" element={<Adjusters />} />
        <Route path="/claims" element={<Claims />} />
      </Routes>
    </Router>
  );
}

export default App;
