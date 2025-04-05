// src/dashboards/AdminDashboard.js
import React, { useState } from 'react';
import { Container, Typography, Button, Box, Grid, Card, CardContent } from '@mui/material';

const mockProperties = [
  { id: 1, name: 'Villa by the Beach', approved: false },
  { id: 2, name: 'Student Hostel Room', approved: true },
];

const AdminDashboard = () => {
  const [properties, setProperties] = useState(mockProperties);

  const handleApprove = (id) => {
    const updated = properties.map((prop) =>
      prop.id === id ? { ...prop, approved: true } : prop
    );
    setProperties(updated);
  };

  const handleReject = (id) => {
    const updated = properties.map((prop) =>
      prop.id === id ? { ...prop, approved: false } : prop
    );
    setProperties(updated);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Manage Listings</Typography>
        <Grid container spacing={2}>
          {properties.map((property) => (
            <Grid item xs={12} md={6} key={property.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{property.name}</Typography>
                  <Typography sx={{ color: property.approved ? 'green' : 'red' }}>
                    {property.approved ? 'Approved' : 'Pending'}
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: '#1abc9c', color: '#fff', mr: 1 }}
                      onClick={() => handleApprove(property.id)}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{ color: '#000', borderColor: '#1abc9c' }}
                      onClick={() => handleReject(property.id)}
                    >
                      Reject
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
