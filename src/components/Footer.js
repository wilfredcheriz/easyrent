// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#16a085',  // Dark turquoise background
        color: 'white',
        py: 2,
        textAlign: 'center',
        zIndex: 1300
      }}
    >
      <Typography variant="body1" sx={{ color: 'white' }}>
        &copy; {new Date().getFullYear()} EasyRent. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
