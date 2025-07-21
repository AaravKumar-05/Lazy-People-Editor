import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import DashboardPage from './DashboardPage';
import AnalysisPage from './AnalysisPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/analysis/:id?" element={<AnalysisPage />} />
      </Routes>
    </Router>
  );
}

export default App; 