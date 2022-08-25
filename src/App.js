import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
//import './App.css';
import Button from "@mui/material/Button";
import Home from './components/home';
import Story from './components/story';
import ResponsiveAppBar  from './components/Navbar';
import Contact from "./components/contact";
import { createTheme, responsiveFontSizes, ThemeProvider, useTheme, styled, typography } from '@mui/material/styles';
import { red, pink, green, purple, grey } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme({
  palette: {
    primary: {
      main: pink['A200'],
    },
    secondary: {
      main: grey[50],
    },
  },
  MuiContainer:{

  },
  typography: {
    h1: {
      fontSize: '2.48 rem',
      fontWeight: 600,
      color:"#212121",
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
  
  
  // root:{
  //   minHeight: '100vh',
  //   backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/bg_new.jpeg'})`,
  //   backgroundRepeat:"no-repeat",
  //   backgroundSize:"cover",
  // },
});

function App() {
  return (
    <>   
     <CssBaseline />
    <ThemeProvider theme ={theme}>
    <ResponsiveAppBar/>

      <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="Story" element={<Story />} />
    <Route path="Contact" element={<Contact />} />
  </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;