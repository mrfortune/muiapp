import React from 'react';
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { createTheme, responsiveFontSizes, ThemeProvider, useTheme, styled, typography } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
<React.StrictMode>
      <BrowserRouter>
        <App/>
  
      </BrowserRouter>
</React.StrictMode>,
    
);
  