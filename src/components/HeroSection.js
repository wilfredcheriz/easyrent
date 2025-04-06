import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/home'); // ✅ Navigate to HomePage
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1619994121345-b61cd610c5a6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        py: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md" align="center">
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '3rem' },
            mb: 3,
            animation: 'colorChange 3s infinite alternate',
          }}
        >
          Welcome to EasyRent
        </Typography>
        <Typography
          variant="h6"
          paragraph
          sx={{
            color: 'white',
            fontSize: { xs: '1rem', sm: '1.2rem' },
            marginBottom: 3,
            maxWidth: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Connecting tenants, agents, and landlords with ease. Discover your perfect property or find a trusted tenant today.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#16a085',
            padding: '12px 24px',
            fontSize: '1rem',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#1abc9c',
            },
            borderRadius: 2,
          }}
          onClick={handleGetStarted} // ✅ This goes to /home
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
