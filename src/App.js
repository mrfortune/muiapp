import * as React from "react";
import { Routes, Route, Switch } from "react-router-dom";
//import './App.css';
import { deepmerge } from '@mui/utils';
import {
  useColorScheme,
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendMuiTheme,
} from '@mui/material/styles';
import Home from './components/Home';
import Story from './components/Story';
import DrawerAppBar from './components/AppBar';
import Contact from './components/Contact';
import LabelBottomNavigation from './components/Footer';
import { createTheme, Paper, responsiveFontSizes, ThemeProvider, useTheme, styled, typography, paperClasses } from '@mui/material/styles';
import basetheme  from './theme/Theme';
import { red, pink, green, purple, grey, blue } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';


// Note: you can't put `joyTheme` inside Material UI's `extendMuiTheme(joyTheme)` because
//       some of the values in the Joy UI theme refers to CSS variables abd not raw colors.
const muiTheme = extendMuiTheme();


const theme = createTheme({
  palette: {
    primary: {
      main: pink['A200'],
    },
    secondary: {
      main: grey[50],
    },
  },
  typography: {
    h1: {
      fontSize: '2.48 rem',
      fontWeight: 900,
      color:"#212121",
    },
    h2:{
fontweight:400,
fontSize:'2 rem',
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  MuiBottomNavigation:{
    styleOverrides:{
backgroundcolor:'transparent',
    },
  },
});
//const muiTheme = extendMuiTheme();

// You can use your own `deepmerge` function.
// muiTheme will deeply merge to joyTheme.
//const theme = deepmerge(joyTheme, muiTheme);

function App() {
  return (
  <ThemeProvider theme={theme}> 
  <CssBaseline/>
<DrawerAppBar/> 
 <Routes>
  <Route path="/" element={<Home />} /> 
  <Route path="/Story" element={<Story />} />
  <Route path="/Contact" element={<Contact />} />
  </Routes> 
<LabelBottomNavigation/>  

    

 </ThemeProvider>
    


  );
}
export default App;