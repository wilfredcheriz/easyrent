// src/pages/LandingPage.js
import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import HomePage from './HomePage'; // ✅ Import HomePage

const LandingPage = () => {
  return (
    <>
      {/* Hero Section at the top of Landing Page */}
      <HeroSection />

      {/* Landing page content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: 'black' }}>
          {/* Optional heading */}
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom sx={{ color: 'black' }}>
          Please select your role to continue:
        </Typography>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              component={Link}
              to="/admin"
              variant="contained"
              fullWidth
              disableRipple
              disableFocusRipple
              sx={{
                backgroundColor: '#16a085',
                color: 'white',
                '&:hover': { backgroundColor: '#16a085' },
                '&:focus': { outline: 'none', boxShadow: 'none' },
                padding: '16px',
              }}
            >
              Admin
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              component={Link}
              to="/tenant"
              variant="contained"
              fullWidth
              disableRipple
              disableFocusRipple
              sx={{
                backgroundColor: '#16a085',
                color: 'white',
                '&:hover': { backgroundColor: '#16a085' },
                '&:focus': { outline: 'none', boxShadow: 'none' },
                padding: '16px',
              }}
            >
              Tenant
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              component={Link}
              to="/agent"
              variant="contained"
              fullWidth
              disableRipple
              disableFocusRipple
              sx={{
                backgroundColor: '#16a085',
                color: 'white',
                '&:hover': { backgroundColor: '#16a085' },
                '&:focus': { outline: 'none', boxShadow: 'none' },
                padding: '16px',
              }}
            >
              Agent
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              component={Link}
              to="/landlord"
              variant="contained"
              fullWidth
              disableRipple
              disableFocusRipple
              sx={{
                backgroundColor: '#16a085',
                color: 'white',
                '&:hover': { backgroundColor: '#16a085' },
                '&:focus': { outline: 'none', boxShadow: 'none' },
                padding: '16px',
              }}
            >
              Landlord
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* ✅ Add HomePage here */}
      <HomePage />
    </>
  );
};

export default LandingPage;
