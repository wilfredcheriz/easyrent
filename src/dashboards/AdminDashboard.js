import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
  Alert,
} from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const mockProperties = [
  { id: 1, name: 'Villa by the Beach', approved: false },
  { id: 2, name: 'Student Hostel Room', approved: true },
];

const mockFeedback = [
  { id: 1, userType: 'Tenant', comment: 'Great service!', rating: 5 },
  { id: 2, userType: 'Landlord', comment: 'Fast approval process.', rating: 4 },
  { id: 3, userType: 'Agent', comment: 'Could be more streamlined.', rating: 2 },
  { id: 4, userType: 'Tenant', comment: 'Very satisfied.', rating: 5 },
  { id: 5, userType: 'Landlord', comment: 'Prompt support.', rating: 4 },
];

const mockEvents = [
  {
    id: 1,
    type: 'Room Viewing',
    description: 'John (Tenant) viewing Apartment A1',
    dateTime: new Date(new Date().getTime() + 3 * 60 * 60 * 1000).toString(), // 3 hrs from now
  },
  {
    id: 2,
    type: 'Meeting',
    description: 'Monthly admin meeting with agents',
    dateTime: new Date(new Date().getTime() + 26 * 60 * 60 * 1000).toString(), // 26 hrs from now
  },
];

const COLORS = ['#00C49F', '#FF8042'];

const AdminDashboard = () => {
  const [properties, setProperties] = useState(mockProperties);
  const [feedback, setFeedback] = useState(mockFeedback);
  const [events, setEvents] = useState(mockEvents);

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

  const getFeedbackSentiment = () => {
    const positive = feedback.filter((f) => f.rating >= 4).length;
    const negative = feedback.length - positive;
    return [
      { name: 'Positive', value: positive },
      { name: 'Negative', value: negative },
    ];
  };

  const averageRating = (
    feedback.reduce((acc, val) => acc + val.rating, 0) / feedback.length
  ).toFixed(1);

  const getUpcomingEvents = (events) => {
    const now = new Date();
    const nextDay = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    return events.filter((event) => {
      const eventDate = new Date(event.dateTime);
      return eventDate > now && eventDate <= nextDay;
    });
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      {/* Manage Listings */}
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

      {/* Feedback Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">User Feedback</Typography>
        <Typography variant="subtitle2">Average Rating: {averageRating}⭐</Typography>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={getFeedbackSentiment()}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {getFeedbackSentiment().map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {feedback.map((item) => (
            <Grid item xs={12} md={6} key={item.id}>
              <Card>
                <CardContent>
                  <Typography variant="subtitle1">{item.comment}</Typography>
                  <Typography variant="body2">Rating: {item.rating} ⭐</Typography>
                  <Chip label={item.userType} sx={{ mt: 1 }} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Events Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Scheduled Events
        </Typography>

        {/* Notifications */}
        {getUpcomingEvents(events).length > 0 && (
          <Box sx={{ mb: 2 }}>
            <Alert severity="info">
              You have {getUpcomingEvents(events).length} upcoming event
              {getUpcomingEvents(events).length > 1 ? 's' : ''} in the next 24 hours!
            </Alert>
          </Box>
        )}

        <Grid container spacing={2}>
          {events.map((event) => {
            const isSoon = getUpcomingEvents([event]).length > 0;
            return (
              <Grid item xs={12} md={6} key={event.id}>
                <Card sx={{ backgroundColor: isSoon ? '#f0f9ff' : 'white' }}>
                  <CardContent>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {event.type}
                    </Typography>
                    <Typography>{event.description}</Typography>
                    <Typography sx={{ color: 'gray', mt: 1 }}>
                      {new Date(event.dateTime).toLocaleString()}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
