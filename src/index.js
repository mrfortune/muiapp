import React from 'react';
import { render } from "react-dom";
import ReactDOM from 'react-dom/client';
import { createTheme, responsiveFontSizes, ThemeProvider, useTheme, styled, typography } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import './index.css';
import App from './App';
import Home from './components/home';
import Story from './components/story';
import DrawerAppBar from './components/AppBar';
import Contact from "./components/contact";
import reportWebVitals from './reportWebVitals';
//import {theme} from './theme/theme';

import CssBaseline from '@mui/material/CssBaseline';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
const rootElement = document.getElementById("root");
render(
  <React.Fragment>


  
  <BrowserRouter>
 {/* <ThemeProvider theme={theme}> */}
  <App/>
  {/* </ThemeProvider> */}
  <Routes>
    {/* <Route path="/" element={<App />} />
    <Route index element={<Home />} /> */}
      {/* <Route path="story" element={<Story />} />
      <Route path="contact" element={<Contact />} /> */}
  </Routes> 
     
  </BrowserRouter>
  </React.Fragment>,

  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
