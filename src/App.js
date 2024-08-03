import React from 'react';  // Add this line
import './App.css';
import HomePage from './pages/HomePage';  // Add this line
import GamePage from './pages/GamePage';  // Add this line
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Add this line                  
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
