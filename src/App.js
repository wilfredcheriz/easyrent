import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useMediaQuery, useTheme, Container, Button, Box } from '@mui/material';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import AdminDashboard from './dashboards/AdminDashboard';
import TenantDashboard from './dashboards/TenantDashboard';
import AgentDashboard from './dashboards/AgentDashboard';
import LandlordDashboard from './dashboards/LandlordDashboard';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';

const Home = () => (
  <Box sx={{ pb: '80px' }}>
    <HeroSection />
    <Container sx={{ mt: 4 }} align="center">
      <Button variant="contained" component={Link} to="/admin" sx={{ m: 1 }}>
        Go to Admin Dashboard
      </Button>
      <Button variant="contained" component={Link} to="/tenant" sx={{ m: 1 }}>
        Go to Tenant Dashboard
      </Button>
      <Button variant="contained" component={Link} to="/agent" sx={{ m: 1 }}>
        Go to Agent Dashboard
      </Button>
      <Button variant="contained" component={Link} to="/landlord" sx={{ m: 1 }}>
        Go to Landlord Dashboard
      </Button>
    </Container>
  </Box>
);

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen is mobile size

  return (
    <div>
      <Navbar />
      <Routes>
        {/* Use / route for the home page */}
        <Route path="/" element={isMobile ? <LandingPage /> : <Home />} />
        
        {/* Routes for dashboards */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/tenant" element={<TenantDashboard />} />
        <Route path="/agent" element={<AgentDashboard />} />
        <Route path="/landlord" element={<LandlordDashboard />} />
        
        {/* Additional routes for other pages */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
