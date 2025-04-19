import React from 'react';
import HeroSection from '../components/HeroSection';
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  Container,
  IconButton,
  Rating
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Home = () => {
  const turquoise = '#1abc9c';
  const black = '#000000';
  const white = '#ffffff';

  // Featured listings with ratings
  const featuredListings = [
    {
      title: 'Bedsitter - Ruaka-Nairobi',
      budget: 'Ksh 7,500/month',
      type: 'Bedsitter',
      contact: '0712 345 678 (Agent Mary)',
      img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3',
      rating: 4.2
    },
    {
      title: 'Bedsitter - Nyali-Mombasa',
      budget: 'Ksh 9,000/month',
      type: 'Bedsitter',
      contact: '0700 123 456 (Agent John)',
      img: 'https://images.unsplash.com/photo-1651805878384-a24daf76899f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      rating: 3.8
    },
    {
      title: 'Single Room - Ngong Road, Nairobi',
      budget: 'Ksh 5,000/month',
      type: 'Single Room',
      contact: '0789 654 321 (Agent David)',
      img: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3',
      rating: 4.7
    },
    {
      title: 'Airbnb - Ngara, Nairobi',
      budget: 'Ksh 20,000/night',
      type: 'Airbnb',
      contact: '0734 567 890 (Agent Lucy)',
      img: 'https://images.unsplash.com/photo-1722942722874-739209c3ad20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      rating: 4.9
    }
  ];

  return (
    <Box sx={{ backgroundColor: white }}>
      {/* Hero Section */}
      <HeroSection />

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
              color: turquoise,
            }}
          >
            {/* Optional Heading */}
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
                backgroundColor: turquoise,
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: 'bold',
                textTransform: 'none',
                borderRadius: 2,
                '&:hover': { backgroundColor: '#16a085' }
              }}
            >
              Join EasyRent Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Search Section */}
      <Box
        sx={{
          position: 'relative',
          background: 'white',
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
            animation: 'colorChange 2s infinite alternate',
          }}
        >
          Find Your Perfect Home
        </Typography>
        <Typography
          variant="h6"
          sx={{
            marginBottom: 3,
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
            color: white,
          }}
        >
          Explore thousands of properties across Kenya
        </Typography>

        {/* Search Bar */}
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', gap: 2, p: { xs: '0 20px', sm: '0 50px' } }}>
          <Box sx={{ width: { xs: '80%', sm: '25%' } }}>
            <TextField label="Location" variant="outlined" fullWidth />
          </Box>
          <Box sx={{ width: { xs: '80%', sm: '25%' } }}>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select label="Type" defaultValue="">{
                ['Bedsitter','One Bedroom','Two Bedroom','Apartment'].map(type => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
                ))
              }</Select>
            </FormControl>
          </Box>
          <Box sx={{ width: { xs: '80%', sm: '25%' } }}>
            <TextField
              label="Budget"
              variant="outlined"
              fullWidth
              InputProps={{ startAdornment: <InputAdornment position="start">Ksh</InputAdornment> }}
            />
          </Box>
          <Box sx={{ width: { xs: '80%', sm: 'auto' }, mt: { xs: 2, sm: 0 } }}>
            <Button variant="contained" fullWidth sx={{ backgroundColor: turquoise, color: white, '&:hover': { backgroundColor: '#16a085' } }}>
              Search
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Featured Listings */}
      <Box sx={{ p: 4, backgroundColor: white, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ maxWidth: '1200px', width: '100%' }}>
          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 4, color: black, fontSize: { xs: '1.5rem', sm: '2rem' } }}>
            Featured Listings
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {featuredListings.map((listing, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card sx={{ borderRadius: 3, boxShadow: 3, position: 'relative' }}>
                  {/* Save Icon */}
                  <IconButton sx={{ position: 'absolute', top: 8, right: 8, backgroundColor: white, '&:hover': { backgroundColor: '#f0f0f0' } }} aria-label="save property">
                    <BookmarkBorderIcon sx={{ color: turquoise }} />
                  </IconButton>

                  <CardMedia component="img" height="200" image={listing.img} alt={listing.title} />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ color: black }}>
                      {listing.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      Budget: {listing.budget}<br />
                      Type: {listing.type}<br />
                      Contact: {listing.contact}
                    </Typography>
                    {/* Rating */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Rating value={listing.rating} precision={0.1} readOnly size="small" />
                      <Typography variant="body2" sx={{ ml: 0.5, color: black }}>
                        {listing.rating}
                      </Typography>
                    </Box>
                  </CardContent>
                  <Box sx={{ p: 2 }}>
                    <Button variant="contained" fullWidth sx={{ backgroundColor: turquoise, color: white, '&:hover': { backgroundColor: '#16a085' } }}>
                      Book Now
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <style>{`
        @keyframes colorChange {
          0% { color: ${black}; }
          100% { color: ${turquoise}; }
        }
      `}</style>
    </Box>
  );
};

export default Home;
