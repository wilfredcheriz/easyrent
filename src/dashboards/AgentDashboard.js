import React from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

function AgentDashboard() {
  const turquoise = "#1abc9c";
  const black = "#000000";
  const white = "#ffffff";

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
            label="Price"
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
    </Container>
  );
}

export default AgentDashboard;
