// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';
import Motive from './Pages/Motive';
import NotFound from './Pages/NotFound';
import ComingSoonModal from './Pages/ComingSoonModal';
import Navbar from './components/Navbar';
import Pricing from './Pages/Pricing';
import SearchResults from './Pages/Search';
import Login from './Auth/Login';
import TermsAndPolicy from './Pages/TermsAndPolicy';
import Footer from './components/Footer';
import Dashboard from './Pages/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="/motive" element={<Motive />} />
        <Route path="/coming-soon" element={<ComingSoonModal onClose={() => {}} />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="/terms" element={<TermsAndPolicy />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/footer" element={<Footer />} />
        {/* Add more routes as needed */}
        
        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
