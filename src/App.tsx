import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';
import Motive from './Pages/Motive';
import NotFound from './Pages/NotFound';
import ComingSoonModal from './Pages/ComingSoonModal';
import Navbar from './Pages/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/motive" element={<Motive />} />
        <Route path="/coming-soon" element={<ComingSoonModal onClose={() => {}} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
