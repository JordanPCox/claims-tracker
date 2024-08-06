import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Adjusters from './components/Adjusters';
import Claims from './components/Claims';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/adjusters" component={Adjusters} />
          <Route path="/claims" component={Claims} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
