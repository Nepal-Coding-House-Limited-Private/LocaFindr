// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

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
// @ts-ignore
import Footer from './components/Footer';
import Dashboard from './Pages/Dashboard';
import PaymentGateway from './Payment/PaymentGateway'; // Assuming you have a PaymentGateway component
import Register from './Auth/Register';

const App: React.FC = () => {
  return (
    <HelmetProvider>
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
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/payment-gateway" element={<PaymentGateway />} />
          <Route path="/auth/register" element={<Register />} />
          {/* Add more routes as needed */}
          
          {/* Footer route */}
          <Route path="/footer" element={<Footer />} />
          {/* Add more routes as needed */}
          
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
