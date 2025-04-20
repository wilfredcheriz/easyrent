import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function AgentDashboard() {
  const turquoise = "#1abc9c";
  const black = "#000000";
  const white = "#ffffff";

  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Villa by the Beach",
      price: 70000,
      description: "A beautiful villa by the beach.",
      location: "Nairobi, Kenya",
      area: "Ruaka, Nairobi",
      status: "Available",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: 2,
      title: "Cozy Studio Apartment",
      price: 35000,
      description: "A cozy studio apartment in the city center.",
      location: "Nairobi, Kenya",
      area: "Kilimani, Nairobi",
      status: "Booked",
      image: "https://images.unsplash.com/photo-1595513279524-fa90ad188c98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHN0dWRpbyUyMGFwcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      title: "Modern 2 Bedroom Apartment",
      price: 45000,
      description: "Spacious 2-bedroom apartment in Nairobi.",
      location: "Nairobi, Kenya",
      area: "Ngong Road, Nairobi",
      status: "Available",
      image: "https://images.unsplash.com/photo-1692681272972-ad7ae5a8a7fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGJ1aWxkaW5nJTIwYW5kJTIwcmVudGFsc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      title: "Suburban Family Home",
      price: 25000,
      description: "A family home with a backyard.",
      location: "Nairobi, Kenya",
      area: "Lang'ata, Nairobi",
      status: "Available",
      image: "https://images.unsplash.com/photo-1633104069776-ea7e61258ec9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlZHJvb20lMjBhcHBhcnRtZW50fGVufDB8fDB8fHww",
    },
  ]);

  const handleDelete = (id) => {
    setProperties(properties.filter((property) => property.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit property with ID: ${id}`);
  };

  return (
    <Container maxWidth="md" sx={{ backgroundColor: white, minHeight: "100vh", py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ color: black }}>
        Agent Dashboard
      </Typography>

      {/* Add New Property */}
      <Typography variant="h6" gutterBottom sx={{ color: turquoise }}>
        Add New Property
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Property Title"
            variant="outlined"
            sx={{
              backgroundColor: white,
              input: { color: black },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: turquoise,
                },
                "&:hover fieldset": {
                  borderColor: black,
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Price (KES)"
            type="number"
            variant="outlined"
            sx={{
              backgroundColor: white,
              input: { color: black },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: turquoise,
                },
                "&:hover fieldset": {
                  borderColor: black,
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={3}
            variant="outlined"
            sx={{
              backgroundColor: white,
              input: { color: black },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: turquoise,
                },
                "&:hover fieldset": {
                  borderColor: black,
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Location"
            variant="outlined"
            value="Nairobi, Kenya"
            disabled
            sx={{
              backgroundColor: white,
              input: { color: black },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: turquoise,
                },
                "&:hover fieldset": {
                  borderColor: black,
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Area"
            variant="outlined"
            value="Kilimani, Nairobi" // You can change this based on property
            sx={{
              backgroundColor: white,
              input: { color: black },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: turquoise,
                },
                "&:hover fieldset": {
                  borderColor: black,
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{ backgroundColor: turquoise, color: white, "&:hover": { backgroundColor: black } }}
          >
            Add Property
          </Button>
        </Grid>
      </Grid>

      {/* Booking Requests */}
      <Typography variant="h6" sx={{ mt: 4, color: turquoise }}>
        Booking Requests
      </Typography>
      <Grid container spacing={2}>
        {[1, 2, 3].map((req) => (
          <Grid item xs={12} sm={6} md={4} key={req}>
            <Card sx={{ backgroundColor: turquoise, color: white }}>
              <CardContent>
                <Typography variant="h6">Tenant {req}</Typography>
                <Typography variant="body2">Requested to book property</Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 1,
                    backgroundColor: white,
                    color: black,
                    "&:hover": { backgroundColor: black, color: white },
                  }}
                >
                  Approve
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    mt: 1,
                    ml: 1,
                    backgroundColor: black,
                    color: white,
                    "&:hover": { backgroundColor: white, color: black },
                  }}
                >
                  Reject
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Property Management Section */}
      <Typography variant="h6" sx={{ mt: 4, color: turquoise }}>
        My Properties
      </Typography>
      <Grid container spacing={2}>
        {properties.map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property.id}>
            <Card sx={{ backgroundColor: "#f4f4f4" }}>
              {property.image && (
                <CardMedia
                  component="img"
                  height="160"
                  image={property.image}
                  alt={property.title}
                />
              )}
              <CardContent>
                <Typography variant="h6">{property.title}</Typography>
                <Typography variant="body2">Price: KSh {property.price}</Typography>
                <Typography variant="body2">Location: {property.location}</Typography>
                <Typography variant="body2">Area: {property.area}</Typography> {/* Added Area */}
                <Typography variant="body2">Status: {property.status}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {property.description}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                  <IconButton color="primary" onClick={() => handleEdit(property.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(property.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AgentDashboard;
