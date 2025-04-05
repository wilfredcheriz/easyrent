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
      }}
    >
      <Container maxWidth="md" align="center">
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            animation: 'colorChange 3s infinite alternate',
            '@keyframes colorChange': {
              '0%': { color: 'black' },
              '100%': { color: 'turquoise' },
            },
          }}
        >
          Welcome to EasyRent
        </Typography>
        <Typography variant="h6" paragraph>
          Connecting tenants, agents, and landlords with ease.
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#16a085' }}
          onClick={handleGetStarted} // ✅ This goes to /home
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
