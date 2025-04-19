import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const turquoise = '#16a085';
  const white = '#ffffff';
  const black = '#000000';

  const menuItems = [
    { path: '/',       label: 'Home' },
    { path: '/admin',      label: 'Admin' },
    { path: '/tenant',     label: 'Tenant' },
    { path: '/agent',      label: 'Agent' },
    { path: '/landlord',   label: 'Landlord' },
  ];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: turquoise }}>
        <Toolbar>
          {/* Site Title as link to “/” */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ color: black, textDecoration: 'none' }}
            >
              EASYRENT
            </Typography>
          </Box>

          {/* Desktop Buttons */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {menuItems.map(({ path, label }, i) => (
              <Button
                key={i}
                component={Link}
                to={path}
                variant="contained"
                sx={{
                  color: turquoise,
                  backgroundColor: white,
                  marginX: 1,
                  '&:hover': { backgroundColor: '#e0f7f4' },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Mobile Hamburger */}
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton onClick={() => setOpen(true)} sx={{ color: white }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
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
          {menuItems.map(({ path, label }, i) => (
            <ListItem
              key={i}
              component={Link}
              to={path}
              onClick={() => setOpen(false)}
              sx={{
                color: white,
                fontSize: '1.5rem',
                padding: '15px 20px',
                '&:hover': { backgroundColor: '#e0f7f4' },
                textDecoration: 'none',
              }}
            >
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
