import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Budget from './pages/Budget';

function App() {
  return (
    <Router>
      {/* Navigation (This goes to NAVBAR Component) */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/">Budget</Link>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Budget />} />
      </Routes>
    </Router>
  );
}

export default App;
