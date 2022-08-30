import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link } from 'react-router-dom';
//import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
//import Link from '@mui/material/Link';
import { LinkProps } from '@mui/material/Link';
import { ThemeProvider } from '@mui/material';
import basetheme from '../theme/Theme';
import Slide from '@mui/material/Slide';
import Diversity3SharpIcon from '@mui/icons-material/Diversity3Sharp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const drawerWidth = 240;
const navItems = ['Story', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
      <Divider />
      <List sx={{ horizontal: 'right',}}>
        {navItems.map((item) => (
          <ListItem key={item} 
          component={Link} 
            to={`/${item}`} sx={{ textAlign: 'left',  }}
          disablePadding>
            <ListItemButton sx={{ textAlign: 'left', fontSize: '12px', textTransform:'uppercase', color:'black'}}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
   
    <Box sx={{ display: 'flex' }}>  

    <ThemeProvider theme={basetheme}>
    <HideOnScroll {...props}>
      <AppBar component="nav" color="transparent" elevation={0} >
        <Toolbar>
        <Box sx={{ flexGrow: 12, }}>
 
<Link to="/"><Diversity3SharpIcon sx={{flexGrow: 12,}}/></Link>
  

            </Box>
        
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs:'block', sm: 'block', md: 'none', horizontal: 'right' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Box sx={{ display: { xs: 'none', sm: 'none', md:'block', horizontal: 'right' } }}>
            {navItems.map((item) => (
              <Button key={item} 
              component={Link} 
              to={`/${item}`} 
              sx={{ color: 'black' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      </HideOnScroll>
      </ThemeProvider>
      <Box component="nav">
        <Drawer
        anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md:'none', horizontal:'right' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
