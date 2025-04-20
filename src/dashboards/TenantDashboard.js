import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Card,
  CardContent,
  CardMedia,
  Box,
  IconButton,
  Rating
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const darkTurquoise = '#16a085'; // Dark Turquoise
const black = '#000000';
const white = '#ffffff';

const TenantDashboard = () => {
  const [bedroomType, setBedroomType] = useState('');
  const [feedback, setFeedback] = useState({ rating: 0, comment: '' });
  const [feedbacks, setFeedbacks] = useState([]);

  const handlePreferencesSubmit = (e) => {
    e.preventDefault();
    console.log('Housing preferences saved for Kenya!');
    console.log(`Selected Bedroom Type: ${bedroomType}`);
  };

  const recommended = [
    {
      title: 'Modern Apartment in Kilimani-Nairobi',
      price: 'KES 150,000/month',
      image:
        'https://plus.unsplash.com/premium_photo-1661876281402-7b534f9598b3?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3',
      rating: 4.5
    },
    {
      title: 'Cozy House in Bamburi-Mombasa',
      price: 'KES 120,000/month',
      image:
        'https://images.unsplash.com/photo-1618808324384-4c395ba38a17?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3',
      rating: 4.0
    },
    {
      title: 'Luxury Condo in Bondo-Kisumu',
      price: 'KES 200,000/month',
      image:
        'https://images.unsplash.com/photo-1679105796545-6a9f6104b8c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      rating: 5.0
    }
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ color: black }}>
        Tenant Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: black }}>
        Welcome! Here you can fill in your housing preferences, view recommended
        properties, and track your booking requests in Kenya.
      </Typography>

      {/* Housing Preferences Form */}
      <Paper sx={{ p: 3, mt: 3, backgroundColor: white }}>
        <Typography variant="h6" gutterBottom sx={{ color: darkTurquoise }}>
          Housing Preferences
        </Typography>
        <form onSubmit={handlePreferencesSubmit}>
          <TextField
            fullWidth
            label="Preferred Location (e.g., Nairobi, Mombasa)"
            variant="outlined"
            margin="normal"
            sx={{ input: { color: black } }}
          />
          <TextField
            fullWidth
            label="Budget (KES)"
            variant="outlined"
            margin="normal"
            type="number"
            sx={{ input: { color: black } }}
          />

          {/* Bedroom Type Select */}
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel sx={{ color: black }}>Bedroom Type</InputLabel>
            <Select
              value={bedroomType}
              onChange={(e) => setBedroomType(e.target.value)}
              label="Bedroom Type"
              sx={{ color: black }}
            >
              <MenuItem value="Single Room">Single Room</MenuItem>
              <MenuItem value="Airbnb">Airbnb</MenuItem>
              <MenuItem value="Bedsitter">Bedsitter</MenuItem>
              <MenuItem value="One Bedroom">One Bedroom</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            type="submit"
            sx={{
              mt: 2,
              backgroundColor: darkTurquoise,
              color: white,
              '&:hover': {
                backgroundColor: '#1abc9c'
              }
            }}
          >
            Save Preferences
          </Button>
        </form>
      </Paper>

      {/* Recommended Properties */}
      <Paper sx={{ p: 3, mt: 3, backgroundColor: white }}>
        <Typography variant="h6" gutterBottom sx={{ color: darkTurquoise }}>
          Recommended Properties
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {recommended.map((prop, idx) => (
            <Card key={idx} sx={{ width: 300, position: 'relative' }}>
              <IconButton
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  backgroundColor: white,
                  '&:hover': { backgroundColor: '#f0f0f0' }
                }}
                aria-label="save property"
              >
                <BookmarkBorderIcon sx={{ color: darkTurquoise }} />
              </IconButton>

              <CardMedia
                component="img"
                height="200"
                image={prop.image}
                alt={prop.title}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: black }}>
                  {prop.title}
                </Typography>
                <Typography variant="body2" sx={{ color: black, mb: 1 }}>
                  {prop.price}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Rating
                    value={prop.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                  <Typography variant="body2" sx={{ color: black, ml: 0.5 }}>
                    {prop.rating}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Paper>

      {/* Booking Requests */}
      <Paper sx={{ p: 3, mt: 3, backgroundColor: white }}>
        <Typography variant="h6" gutterBottom sx={{ color: darkTurquoise }}>
          Booking Requests
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Apartment Viewing in Nairobi on July 10, 2025"
              secondary="Pending"
              primaryTypographyProps={{ color: black }}
              secondaryTypographyProps={{ color: darkTurquoise }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="House Tour in Mombasa on July 15, 2025"
              secondary="Approved"
              primaryTypographyProps={{ color: black }}
              secondaryTypographyProps={{ color: darkTurquoise }}
            />
          </ListItem>
        </List>
      </Paper>

      {/* Feedback Section */}
      <Paper sx={{ p: 3, mt: 3, mb: 4, backgroundColor: white }}>
        <Typography variant="h6" gutterBottom sx={{ color: darkTurquoise }}>
          Feedback
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (feedback.comment && feedback.rating) {
              setFeedbacks([...feedbacks, feedback]);
              setFeedback({ rating: 0, comment: '' });
            }
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ color: black }}>Rate Your Experience:</Typography>
            <Rating
              value={feedback.rating}
              onChange={(e, newValue) =>
                setFeedback({ ...feedback, rating: newValue })
              }
              precision={0.5}
              sx={{ color: darkTurquoise }}
            />
          </Box>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Your feedback"
            variant="outlined"
            value={feedback.comment}
            onChange={(e) =>
              setFeedback({ ...feedback, comment: e.target.value })
            }
            sx={{ mb: 2, input: { color: black }, textarea: { color: black } }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: darkTurquoise,
              color: white,
              '&:hover': { backgroundColor: '#1abc9c' }
            }}
          >
            Submit Feedback
          </Button>
        </form>

        {/* Display Feedbacks */}
        {feedbacks.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1" sx={{ color: darkTurquoise }}>
              Previous Feedback
            </Typography>
            {feedbacks.map((fb, index) => (
              <Box
                key={index}
                sx={{
                  mb: 2,
                  p: 2,
                  border: '1px solid #ccc',
                  borderRadius: 1
                }}
              >
                <Rating value={fb.rating} readOnly size="small" />
                <Typography sx={{ mt: 1, color: black }}>
                  {fb.comment}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default TenantDashboard;
