import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminDashboard from './dashboards/AdminDashboard';
import TenantDashboard from './dashboards/TenantDashboard';
import AgentDashboard from './dashboards/AgentDashboard';
import LandlordDashboard from './dashboards/LandlordDashboard';

import LandingPage from './pages/LandingPage';  // Import LandingPage

const App = () => {
  const location = useLocation();

  return (
    <div>
      {/* Display Navbar on all pages */}
      <Navbar />
      
      <Routes>
        {/* Set the HomePage as the default route */}
        <Route path="/" element={<HomePage />} />
        
        {/* Routes for dashboards */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/tenant" element={<TenantDashboard />} />
        <Route path="/agent" element={<AgentDashboard />} />
        <Route path="/landlord" element={<LandlordDashboard />} />
        
        {/* Other routes */}
        <Route path="/home" element={<HomePage />} />
      </Routes>

      {/* Only render Footer if the current path is not the home page */}
      {location.pathname !== '/' && <Footer />}
    </div>
  );
};

export default App;
