import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminDashboard from './dashboards/AdminDashboard';
import TenantDashboard from './dashboards/TenantDashboard';
import AgentDashboard from './dashboards/AgentDashboard';
import LandlordDashboard from './dashboards/LandlordDashboard';
import LandingPage from './pages/LandingPage'; // even if unused

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/tenant" element={<TenantDashboard />} />
        <Route path="/agent" element={<AgentDashboard />} />
        <Route path="/landlord" element={<LandlordDashboard />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
    </>
  );
};

export default App;
