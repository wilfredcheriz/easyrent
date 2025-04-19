import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';

import Navbar            from './components/Navbar';
import Footer            from './components/Footer';
import HomePage          from './pages/HomePage';
import AdminDashboard    from './dashboards/AdminDashboard';
import TenantDashboard   from './dashboards/TenantDashboard';
import AgentDashboard    from './dashboards/AgentDashboard';
import LandlordDashboard from './dashboards/LandlordDashboard';

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />

      <Routes>
        {/* True home */}
        <Route path="/" element={<HomePage />} />

        {/* Dashboards */}
        <Route path="/admin"    element={<AdminDashboard />} />
        <Route path="/tenant"   element={<TenantDashboard />} />
        <Route path="/agent"    element={<AgentDashboard />} />
        <Route path="/landlord" element={<LandlordDashboard />} />

        {/* Redirect any “/home” or completely unknown URLs back to “/” */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*"     element={<Navigate to="/" replace />} />
      </Routes>

      {/* Only show footer when you’re _not_ on the true homepage */}
      {pathname !== '/' && <Footer />}
    </>
  );
};

export default App;
