import React, { useState } from 'react';
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
  Rating,
  Divider,
  Link,
  Paper
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Home = () => {
  const turquoise = '#1abc9c';
  const black = '#000000';
  const white = '#ffffff';

  // State for feedback
  const [feedback, setFeedback] = useState({ rating: 0, comment: '' });
  const [feedbacks, setFeedbacks] = useState([]);

  const featuredListings = [
    { title: 'Bedsitter - Ruaka-Nairobi', budget: 'Ksh 7,500/month', type: 'Bedsitter', contact: '0712 345 678 (Agent Mary)', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3', rating: 4.2 },
    { title: 'Bedsitter - Nyali-Mombasa', budget: 'Ksh 9,000/month', type: 'Bedsitter', contact: '0700 123 456 (Agent John)', img: 'https://images.unsplash.com/photo-1651805878384-a24daf76899f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3', rating: 3.8 },
    { title: 'Single Room - Ngong Road, Nairobi', budget: 'Ksh 5,000/month', type: 'Single Room', contact: '0789 654 321 (Agent David)', img: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3', rating: 4.7 },
    { title: 'Airbnb - Ngara, Nairobi', budget: 'Ksh 20,000/night', type: 'Airbnb', contact: '0734 567 890 (Agent Lucy)', img: 'https://images.unsplash.com/photo-1722942722874-739209c3ad20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3', rating: 4.9 }
  ];

  return (
    <Box sx={{ backgroundColor: white }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Introduction */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #e0f7fa, #e8f5e9)',
          p: { xs: 4, sm: 8 },
          borderRadius: 5,
          boxShadow: 3,
          mb: 6,
          mt: 4
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            align="center"
            sx={{ fontWeight: 800, mb: 3, color: turquoise }}
          >
            {/* Optional Heading */}
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ fontSize: '1.3rem', lineHeight: 1.8, color: '#2c3e50' }}
          >
            EasyRent is your all-in-one platform for stress-free property rentals. We connect <strong>tenants</strong>, <strong>agents</strong>, and <strong>landlords</strong> through a smart, easy-to-use system. Whether you're searching for a new home, managing multiple listings, or seeking trusted renters, EasyRent provides verified listings, direct communication, and a seamless rental experience.
          </Typography>
          <Box align="center" sx={{ mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: turquoise,
                p: '12px 24px',
                fontSize: '1rem',
                fontWeight: 'bold',
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
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', sm: '3rem' },
            mb: 2,
            color: white,
            animation: 'colorChange 2s infinite alternate'
          }}
        >
          Find Your Perfect Home
        </Typography>
        <Typography variant="h6" sx={{ mb: 3, color: white }}>
          Explore thousands of properties across Kenya
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, p: { xs: '0 20px', sm: '0 50px' } }}>
          <TextField label="Location" variant="outlined" fullWidth />
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select defaultValue="">
              {['Bedsitter', 'One Bedroom', 'Two Bedroom', 'Apartment'].map(t => (
                <MenuItem key={t} value={t}>{t}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Budget"
            variant="outlined"
            fullWidth
            InputProps={{ startAdornment: <InputAdornment position="start">Ksh</InputAdornment> }}
          />
          <Button variant="contained" sx={{ backgroundColor: turquoise, '&:hover': { backgroundColor: '#16a085' } }}>
            Search
          </Button>
        </Box>
      </Box>

      {/* Featured Listings */}
      <Box sx={{ p: 4, backgroundColor: white }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 4, color: black }}>
            Featured Listings
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {featuredListings.map((listing, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card sx={{ position: 'relative', boxShadow: 3, borderRadius: 3 }}>
                  <IconButton
                    sx={{ position: 'absolute', top: 8, right: 8, backgroundColor: white, '&:hover': { backgroundColor: '#f0f0f0' } }}
                    aria-label="save property"
                  >
                    <BookmarkBorderIcon sx={{ color: turquoise }} />
                  </IconButton>
                  <CardMedia component="img" height="200" image={listing.img} alt={listing.title} />
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 1, color: black }}>{listing.title}</Typography>
                    <Typography variant="body2" sx={{ mb: 1, color: black }}>Budget: {listing.budget}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Rating value={listing.rating} precision={0.1} readOnly size="small" />
                      <Typography variant="body2" sx={{ ml: 0.5 }}>{listing.rating}</Typography>
                    </Box>
                  </CardContent>
                  <Box sx={{ p: 2 }}>
                    <Button variant="contained" fullWidth sx={{ backgroundColor: turquoise, '&:hover': { backgroundColor: '#16a085' } }}>
                      Book Now
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
  {/* Testimonial Section */}
  <Box sx={{ p: 4, backgroundColor: white }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 4, color: black }}>
            What Users Are Struggling With
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {/* Testimonial for Tenants */}
            <Grid item xs={12} sm={4}>
              <Card sx={{ padding: 2, boxShadow: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: black }}>
                  Tenant's Challenge
                </Typography>
                <Typography sx={{ mt: 2, color: '#555' }}>
                  "I often find myself wasting hours searching for available rental properties, only to realize that many listings are either outdated or misleading. It's frustrating to find the right place that fits my budget and requirements. The process of contacting landlords is inefficient and leaves me feeling uncertain about the legitimacy of the listings."
                </Typography>
                <Typography sx={{ mt: 2, fontStyle: 'italic', color: '#888' }}>- John Doe, Tenant</Typography>
                <Typography sx={{ mt: 2, color: turquoise, fontWeight: 'bold' }}>
                  How EasyRent Solves It:
                </Typography>
                <Typography sx={{ color: '#555' }}>
                  "With EasyRent, tenants will have access to verified, up-to-date listings. The platform ensures that all properties meet the listed criteria, and the contact process is streamlined, so tenants can reach out directly to landlords and agents without wasting time."
                </Typography>
              </Card>
            </Grid>

            {/* Testimonial for Agents */}
            <Grid item xs={12} sm={4}>
              <Card sx={{ padding: 2, boxShadow: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: black }}>
                  Agent's Struggle
                </Typography>
                <Typography sx={{ mt: 2, color: '#555' }}>
                  "Managing multiple clients and listings across different platforms is a nightmare. It's hard to keep track of inquiries, and sometimes I lose touch with potential tenants. My communication is scattered, which leads to missed opportunities and inefficiencies."
                </Typography>
                <Typography sx={{ mt: 2, fontStyle: 'italic', color: '#888' }}>- Sarah Kim, Agent</Typography>
                <Typography sx={{ mt: 2, color: turquoise, fontWeight: 'bold' }}>
                  How EasyRent Solves It:
                </Typography>
                <Typography sx={{ color: '#555' }}>
                  "EasyRent will provide agents with a centralized platform where they can manage their listings, communicate with multiple tenants in one place, and access real-time updates on property status, helping them streamline their work and increase efficiency."
                </Typography>
              </Card>
            </Grid>

            {/* Testimonial for Landlords */}
            <Grid item xs={12} sm={4}>
              <Card sx={{ padding: 2, boxShadow: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: black }}>
                  Landlord's Concern
                </Typography>
                <Typography sx={{ mt: 2, color: '#555' }}>
                  "As a landlord, I'm overwhelmed with the number of inquiries I receive, but many are from people who don't meet the requirements or are unreliable. I struggle to filter serious tenants and sometimes waste time negotiating with the wrong people."
                </Typography>
                <Typography sx={{ mt: 2, fontStyle: 'italic', color: '#888' }}>- Mary Nyambura, Landlord</Typography>
                <Typography sx={{ mt: 2, color: turquoise, fontWeight: 'bold' }}>
                  How EasyRent Solves It:
                </Typography>
                <Typography sx={{ color: '#555' }}>
                  "EasyRent will provide landlords with a pre-screening tool to filter out non-serious tenants and streamline the application process. With verified tenant profiles, landlords can quickly find the right tenants and reduce the time spent on communication and negotiation."
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Feedback Section */}
      <Box sx={{ p: 4, backgroundColor: white }}>
        <Container maxWidth="md">
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: black }}>
            Feedback
          </Typography>
          <Paper sx={{ p: 3, mb: 4 }}>
            <form
              onSubmit={e => {
                e.preventDefault();
                if (feedback.comment && feedback.rating) {
                  setFeedbacks([...feedbacks, feedback]);
                  setFeedback({ rating: 0, comment: '' });
                }
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ mb: 1, color: black }}>Rate your experience:</Typography>
                <Rating
                  value={feedback.rating}
                  precision={0.5}
                  onChange={(e, newValue) => setFeedback({ ...feedback, rating: newValue })}
                  sx={{ color: turquoise }}
                />
              </Box>
              <TextField
                label="Your feedback"
                fullWidth
                multiline
                rows={3}
                value={feedback.comment}
                onChange={e => setFeedback({ ...feedback, comment: e.target.value })}
                sx={{ mb: 2, input: { color: black }, textarea: { color: black } }}
              />
              <Button type="submit" variant="contained" sx={{ backgroundColor: turquoise, color: white, '&:hover': { backgroundColor: '#16a085' } }}>
                Submit Feedback
              </Button>
            </form>
          </Paper>

          {/* Display Previous Feedback */}
          {feedbacks.length > 0 && (
            <Box>
              <Typography variant="h6" gutterBottom sx={{ color: turquoise }}>
                Previous Feedback
              </Typography>
              {feedbacks.map((fb, idx) => (
                <Paper key={idx} sx={{ p: 2, mb: 2 }}>
                  <Rating value={fb.rating} readOnly size="small" />
                  <Typography sx={{ mt: 1, color: black }}>{fb.comment}</Typography>
                </Paper>
              ))}
            </Box>
          )}
        </Container>
      </Box>

      {/* Static Footer */}
      <Box sx={{ backgroundColor: turquoise, color: white, py: 4, px: 2, mt: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom>EasyRent</Typography>
              <Typography variant="body2">Find your perfect home with Kenya’s easiest property rental platform.</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6" gutterBottom>Explore</Typography>
              <Link href="#" underline="hover" color="inherit" display="block">Browse Listings</Link>
              <Link href="#" underline="hover" color="inherit" display="block">Agents</Link>
              <Link href="#" underline="hover" color="inherit" display="block">Landlords</Link>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6" gutterBottom>Contact</Typography>
              <Typography variant="body2">Email: info@easyrent.co.ke</Typography>
              <Typography variant="body2">Phone: +254 745 738 916</Typography>
            </Grid>
          </Grid>
          <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.3)' }} />
          <Typography variant="body2" align="center">© {new Date().getFullYear()} EasyRent. All rights reserved.</Typography>
        </Container>
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
