import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen(true);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  const turquoise = '#16a085';
  const white = '#ffffff';
  const black = '#000000';

  return (
    <AppBar position="static" sx={{ backgroundColor: turquoise }}>
      <Toolbar>
        {/* Site Title Only */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Typography variant="h6" component="div" sx={{ color: black }}>
            EASYRENT
          </Typography>
        </Box>

        {/* Desktop Buttons */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {[
            { path: '/home', label: 'Home' },
            { path: '/admin', label: 'Admin' },
            { path: '/tenant', label: 'Tenant' },
            { path: '/agent', label: 'Agent' },
            { path: '/landlord', label: 'Landlord' },
          ].map((item, index) => (
            <Button
              key={index}
              component={Link}
              to={item.path}
              sx={{
                color: turquoise,
                backgroundColor: white,
                marginX: 1,
                '&:hover': {
                  backgroundColor: '#e0f7f4',
                },
              }}
              variant="contained"
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <IconButton
            sx={{ color: white }}
            edge="start"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={handleMenuClose}
        sx={{
          width: '60%',
          backgroundColor: turquoise,
          color: white,
          '& .MuiDrawer-paper': {
            width: '60%',
            backgroundColor: turquoise,
            color: white,
            paddingTop: '2rem',
            transition: 'transform 0.3s ease-in-out',
          },
        }}
      >
        <List>
          {[
            { path: '/home', label: 'Home' },
            { path: '/admin', label: 'Admin' },
            { path: '/tenant', label: 'Tenant' },
            { path: '/agent', label: 'Agent' },
            { path: '/landlord', label: 'Landlord' },
          ].map((item, index) => (
            <ListItem
              key={index}
              button
              onClick={handleMenuClose}
              component={Link}
              to={item.path}
              sx={{
                color: white,
                fontSize: '1.5rem',
                padding: '15px 20px',
                '&:hover': {
                  backgroundColor: '#e0f7f4',
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
