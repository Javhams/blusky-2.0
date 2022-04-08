import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '/@img/svg/logo1.svg'

import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import Listnav from './Listnav'

const styledIcon = {
  color: (theme) => theme.palette.secondary[50],
};

const styleLogo = {
  maxwidth:'70px',
  maxheight:'70px',
}

const menuS = {
  '&.MuiSvgIcon-root': {
    fontSize:'2.3rem'
  }
}

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const routes = [
    {
      to: '/getsky',
      icon: <DashboardIcon sx={styledIcon} />,
      name: 'Getsky',
      key: 'getS'
    },
    {
      to: '/blog',
      icon: <SettingsIcon sx={styledIcon} />,
      name: 'Blog',
      key: 'blogS'
    },
    {
      to:'/about',
      icon: <ShoppingCartIcon sx={styledIcon} />,
      name: 'About',
      key: 'aboutS'
    },
    {
      to:'/footer',
      icon: <ShoppingCartIcon sx={styledIcon} />,
      name: 'footer',
      key: 'adx'
    }
  ];
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{height:'60px'}}>
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }}}
          >
            <img sx={styleLogo} src={logo} alt="goes logo"/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{bottom:'3px'}}
            >
              <MenuIcon sx={{...menuS}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {routes.map((routes, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Listnav routes={routes} />
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end'}}
          >
            <img src={logo} alt="goes logo"/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {routes.map((routes, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {routes.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigation;
