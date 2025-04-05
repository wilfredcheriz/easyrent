import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Input,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';

function LandlordDashboard() {
  const [newProperty, setNewProperty] = useState({
    title: '',
    location: '',
    price: '',
    description: '',
    image: null,
  });

  const [bookings, setBookings] = useState([
    { id: 1, tenant: 'Mwangi Kamau', property: 'Nairobi CBD Apartment', status: 'Pending' },
    { id: 2, tenant: 'Amina Hassan', property: 'Mombasa Beach House', status: 'Confirmed' },
  ]);

  const [messages, setMessages] = useState([
    { sender: 'Tenant', text: 'Is the house available for rent in Nairobi?' },
    { sender: 'Landlord', text: 'Yes, it is available. Would you like to schedule a viewing?' },
  ]);

  const [chatInput, setChatInput] = useState('');

  const handleInputChange = (e) => {
    setNewProperty({ ...newProperty, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProperty({ ...newProperty, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProperty = (e) => {
    e.preventDefault();
    console.log('Property Added:', newProperty);
    setNewProperty({ title: '', location: '', price: '', description: '', image: null });
  };

  const handleSendMessage = () => {
    if (chatInput.trim() !== '') {
      setMessages([...messages, { sender: 'Landlord', text: chatInput }]);
      setChatInput('');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ my: 4, backgroundColor: '#ffffff' }}>
      <Grid container spacing={4}>
        
        {/* Add New Property Form */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderColor: '#16a085', borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#16a085' }}>
              Add New Property
            </Typography>
            <form onSubmit={handleAddProperty}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Property Title"
                    name="title"
                    value={newProperty.title}
                    onChange={handleInputChange}
                    required
                    sx={{
                      input: {
                        color: '#16a085'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Location"
                    name="location"
                    value={newProperty.location}
                    onChange={handleInputChange}
                    required
                    sx={{
                      input: {
                        color: '#16a085'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Price (KES)"
                    name="price"
                    value={newProperty.price}
                    onChange={handleInputChange}
                    type="number"
                    required
                    sx={{
                      input: {
                        color: '#16a085'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={newProperty.description}
                    onChange={handleInputChange}
                    multiline
                    rows={3}
                    required
                    sx={{
                      input: {
                        color: '#16a085'
                      }
                    }}
                  />
                </Grid>
                {/* Image Upload */}
                <Grid item xs={12}>
                  <Typography variant="subtitle1" sx={{ color: '#16a085' }}>Upload Property Image:</Typography>
                  <Input type="file" accept="image/*" onChange={handleImageUpload} sx={{ color: '#16a085' }} />
                  {newProperty.image && (
                    <img
                      src={newProperty.image}
                      alt="Property Preview"
                      style={{ marginTop: 10, maxWidth: '100%', height: 'auto', borderRadius: 8 }}
                    />
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" type="submit" sx={{ backgroundColor: '#16a085' }}>
                    Add Property
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>

        {/* Manage Bookings */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderColor: '#16a085', borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#16a085' }}>
              Manage Bookings
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: '#16a085' }}>ID</TableCell>
                  <TableCell sx={{ color: '#16a085' }}>Tenant</TableCell>
                  <TableCell sx={{ color: '#16a085' }}>Property</TableCell>
                  <TableCell sx={{ color: '#16a085' }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>{booking.id}</TableCell>
                    <TableCell>{booking.tenant}</TableCell>
                    <TableCell>{booking.property}</TableCell>
                    <TableCell>{booking.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>

        {/* Chat Feature */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderColor: '#16a085', borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#16a085' }}>
              Tenant Chat
            </Typography>
            <List sx={{ maxHeight: 300, overflow: 'auto', border: '1px solid #ddd', borderRadius: 1, mb: 2 }}>
              {messages.map((msg, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      primary={msg.text}
                      secondary={msg.sender}
                      sx={{ textAlign: msg.sender === 'Landlord' ? 'right' : 'left' }}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
            <Grid container spacing={1}>
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Type a message"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  sx={{
                    input: {
                      color: '#16a085'
                    }
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" color="primary" fullWidth onClick={handleSendMessage} sx={{ backgroundColor: '#16a085' }}>
                  Send
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LandlordDashboard;
