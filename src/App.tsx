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
import Login from './Auth/Login'; // Importing Login component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        {/* Navbar route for testing, can be removed later */}
        <Route path="/" element={<Home />} />
        <Route path="/motive" element={<Motive />} />
        <Route path="/coming-soon" element={<ComingSoonModal onClose={() => {}} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/pricing" element={<Pricing />} /> {/* Adding the Pricing route */}
        <Route path="/search" element={<SearchResults />} />
        <Route path="/login" element={<Login />} /> {/* Adding the Login route */}

      </Routes>
    </Router>
  );
};

export default App;
