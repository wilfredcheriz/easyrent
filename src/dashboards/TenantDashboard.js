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
} from '@mui/material';

const darkTurquoise = '#16a085'; // Dark Turquoise
const black = '#000000';
const white = '#ffffff';

const TenantDashboard = () => {
  const [bedroomType, setBedroomType] = useState('');

  const handlePreferencesSubmit = (e) => {
    e.preventDefault();
    console.log('Housing preferences saved for Kenya!');
    console.log(`Selected Bedroom Type: ${bedroomType}`);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ color: black }}>
        Tenant Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: black }}>
        Welcome! Here you can fill in your housing preferences, view recommended properties, and track your booking requests in Kenya.
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
                backgroundColor: '#1abc9c',
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
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {/* Property 1 */}
          <Card sx={{ width: 300 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://plus.unsplash.com/premium_photo-1661876281402-7b534f9598b3?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Image from Unsplash
              alt="Modern Apartment in Nairobi"
            />
            <CardContent>
              <Typography variant="h6" component="div" sx={{ color: black }}>
                Modern Apartment in Kilimani-Nairobi
              </Typography>
              <Typography variant="body2" sx={{ color: black }}>
                KES 150,000/month
              </Typography>
            </CardContent>
          </Card>

          {/* Property 2 */}
          <Card sx={{ width: 300 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://images.unsplash.com/photo-1618808324384-4c395ba38a17?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Image from Unsplash
              alt="Cozy House in Mombasa"
            />
            <CardContent>
              <Typography variant="h6" component="div" sx={{ color: black }}>
                Cozy House in Bamburi-Mombasa
              </Typography>
              <Typography variant="body2" sx={{ color: black }}>
                KES 120,000/month
              </Typography>
            </CardContent>
          </Card>

          {/* Property 3 */}
          <Card sx={{ width: 300 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://images.unsplash.com/photo-1679105796545-6a9f6104b8c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Image from Unsplash
              alt="Luxury Condo in Kisumu"
            />
            <CardContent>
              <Typography variant="h6" component="div" sx={{ color: black }}>
                Luxury Condo in Bondo-Kisumu
              </Typography>
              <Typography variant="body2" sx={{ color: black }}>
                KES 200,000/month
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Paper>

      {/* Booking Requests */}
      <Paper sx={{ p: 3, mt: 3, mb: 4, backgroundColor: white }}>
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
    </Container>
  );
};

export default TenantDashboard;
