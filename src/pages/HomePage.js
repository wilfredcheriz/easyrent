import React from 'react';
import {
  Box, Typography, Button, TextField, Grid, Card, CardContent,
  CardMedia, FormControl, InputLabel, Select, MenuItem, InputAdornment, Container
} from '@mui/material';

const Home = () => {
  const turquoise = '#1abc9c';
  const black = '#000000';
  const white = '#ffffff';

  return (
    <Box sx={{ backgroundColor: white }}>
      {/* Introduction Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #e0f7fa, #e8f5e9)',
          padding: { xs: 4, sm: 8 },
          borderRadius: 5,
          boxShadow: 3,
          mb: 6,
          mt: 4,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 800,
              fontFamily: '"Poppins", "Roboto", sans-serif',
              mb: 3,
              color: '#1abc9c',
            }}
          >
            Welcome to EasyRent
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontSize: '1.3rem',
              lineHeight: 1.8,
              fontFamily: '"Inter", "Roboto", sans-serif',
              color: '#2c3e50',
            }}
          >
            EasyRent is your all-in-one platform for stress-free property rentals. We connect <strong>tenants</strong>, <strong>agents</strong>, and <strong>landlords</strong> through a smart, easy-to-use system. Whether you're searching for a new home, managing multiple listings, or seeking trusted renters, EasyRent provides verified listings, direct communication, and a seamless rental experience.
          </Typography>
          <Box align="center" sx={{ mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#1abc9c',
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: 'bold',
                textTransform: 'none',
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#16a085',
                },
              }}
            >
              Join EasyRent Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Hero Section */}
      {/* ... the rest of your Hero Section code remains unchanged below ... */}

        {/* Hero Section */}
        <Box
            sx={{
            position: 'relative',
            backgroundColor: white,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: turquoise,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            }}
        >
            <Typography
            variant="h3"
            sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2.5rem', sm: '3rem' },
                marginBottom: 2,
                color: white,
                animation: 'colorChange 2s infinite alternate', // Add animation for color change
            }}
            >
            Find Your Perfect Home
            </Typography>
            <Typography
            variant="h6"
            sx={{
                marginBottom: 3,
                fontSize: { xs: '1.2rem', sm: '1.5rem' },
                color: white
            }}
            >
            Explore thousands of properties across Kenya
            </Typography>

            {/* Search Bar */}
            <Box sx={{
            marginTop: 3,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            gap: 2,
            padding: { xs: '0 20px', sm: '0 50px' }
            }}>
            <Box sx={{ width: { xs: '80%', sm: '25%' } }}>
                <TextField
                label="Location"
                variant="outlined"
                fullWidth
                />
            </Box>

            <Box sx={{ width: { xs: '80%', sm: '25%' } }}>
                <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                    label="Type"
                    defaultValue=""
                >
                    <MenuItem value="Bedsitter">Bedsitter</MenuItem>
                    <MenuItem value="One Bedroom">One Bedroom</MenuItem>
                    <MenuItem value="Two Bedroom">Two Bedroom</MenuItem>
                    <MenuItem value="Apartment">Apartment</MenuItem>
                </Select>
                </FormControl>
            </Box>

            <Box sx={{ width: { xs: '80%', sm: '25%' } }}>
                <TextField
                label="Budget"
                variant="outlined"
                fullWidth
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        Ksh
                    </InputAdornment>
                    ),
                }}
                />
            </Box>

            <Box sx={{ width: { xs: '80%', sm: 'auto' }, marginTop: { xs: 2, sm: 0 } }}>
                <Button
                variant="contained"
                sx={{
                    backgroundColor: turquoise,
                    color: white,
                    '&:hover': { backgroundColor: '#16a085' },
                    width: '100%',
                }}
                >
                Search
                </Button>
            </Box>
            </Box>
        </Box>

        {/* Featured Listings */}
        <Box sx={{ padding: 4, backgroundColor: white, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ maxWidth: '1200px', width: '100%' }}>
            <Typography
                variant="h4"
                align="center"
                sx={{
                fontWeight: 'bold',
                marginBottom: 4,
                color: black,
                fontSize: { xs: '1.5rem', sm: '2rem' }
                }}
            >
                Featured Listings
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {[
                {
                    title: "Bedsitter - Ruaka-Nairobi",
                    budget: "Ksh 7,500/month",
                    type: "Bedsitter",
                    contact: "0712 345 678 (Agent Mary)",
                    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    title: "Bedsitter - Nyali-Mombasa",
                    budget: "Ksh 9,000/month",
                    type: "Bedsitter",
                    contact: "0700 123 456 (Agent John)",
                    img: "https://images.unsplash.com/photo-1651805878384-a24daf76899f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    title: "Single Room - Ngong Road, Nairobi",
                    budget: "Ksh 5,000/month",
                    type: "Single Room",
                    contact: "0789 654 321 (Agent David)",
                    img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    title: "Airbnb - Ngara, Nairobi",
                    budget: "Ksh 20,000/night",
                    type: "Airbnb",
                    contact: "0734 567 890 (Agent Lucy)",
                    img: "https://images.unsplash.com/photo-1722942722874-739209c3ad20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                ].map((listing, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={listing.img}
                        alt={listing.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{ color: black }}>
                        {listing.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Budget: {listing.budget}
                        <br />
                        Type: {listing.type}
                        <br />
                        Contact: {listing.contact}
                        </Typography>
                    </CardContent>
                    <Box sx={{ padding: 2 }}>
                        <Button
                        variant="contained"
                        fullWidth
                        sx={{ backgroundColor: turquoise, color: white, '&:hover': { backgroundColor: '#16a085' } }}
                        >
                        Book Now
                        </Button>
                    </Box>
                    </Card>
                </Grid>
                ))}
            </Grid>
            </Box>
        </Box>

        {/* Add Animation CSS */}
        <style>
            {`
            @keyframes colorChange {
                0% {
                color: ${black};
                }
                100% {
                color: ${turquoise};
                }
            }
            `}
        </style>
        </Box>
    );
    };

    export default Home;
