// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css' 
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Featured from './components/Featured';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="main-content">
          <Introduction />
          <Featured />
        </div>
      </div>
    </Router>
  );
};

export default App;