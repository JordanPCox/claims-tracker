import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Adjusters from './components/Adjusters';
import Claims from './components/Claims';
import Home from './components/Home';
import Navigation from './components/Navigation';
import AdjusterDetails from './components/AdjusterDetails';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adjusters" element={<Adjusters />} />
        <Route path="/adjusters/:adjusterId" element={<AdjusterDetails />} />
        <Route path="/claims" element={<Claims />} />
      </Routes>
    </Router>
  );
}

export default App;
