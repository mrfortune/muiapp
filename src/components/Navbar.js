import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { createTheme, responsiveFontSizes, ThemeProvider, useTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import DragHandleIcon from '@mui/icons-material/DragHandle';

//const pages = ['Home','Story', 'Contact'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {

const MenuItems = [{Name:"Home", Link:'/'},
{ Name:"Story", Link:'#'},
{ Name:"Contact Us", Link:'#'},

];
const [open, SetOpen] = React.useState(false);

const MenuBox = styled(Box)({
display:"flex",
gap:30,

});
return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="false">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 12, }}>
 <Diversity2Icon >

  </Diversity2Icon>

            </Box>
       
          <Box sx={{ display: { xs: 'flex', md: 'none', horizontal:'right' } }}>
             <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon sx={{ 
                color:"black", 
                display:{xs:"block", sm:"block", md:"none"},
              }}
            onClick = {() => SetOpen (!open)}
            />
            </IconButton>  
            
            <Menu
              id="menu-appbar"
              open={open}
              onClose ={() => SetOpen (!open)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Box sx={{ width:350, height:'90vh', p: '20',}}>
              {MenuItems.map((item) => (
              <Typography sx={{ cursor: "pointer", my: 2, color: 'black', display: 'block', fontSize:"14px", }}>{item.Name}
              </Typography>
            ))}
              </Box> 
              
              
            </Menu> 
           
          </Box>
<MenuBox sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', horizontal:'right' } }}>
 {MenuItems.map((item) => (
              <Typography sx={{ cursor: "pointer", my: 2, color: 'black', display: 'block', fontSize:"14px", }}>{item.Name}
              </Typography>
            ))}
            </MenuBox>
         
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
