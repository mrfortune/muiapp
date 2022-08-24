import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
//import './App.css';
import Button from "@mui/material/Button";
import Home from './components/home';
import Story from './components/story';
import ResponsiveAppBar  from './components/Header';
import Contact from "./components/contact";
import { createTheme, ThemeProvider, useTheme, styled, typography } from '@mui/material/styles';
import { green, purple, grey } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: grey[200],
    },
  },
  typography: {
    h1: {
      fontWeight: 600,
    },
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