import * as React from "react";
import { Routes, Route, Switch } from "react-router-dom";
import './App.css';
import { deepmerge } from '@mui/utils';
import {
  useColorScheme,
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendMuiTheme,
} from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { extendTheme as extendJoyTheme } from '@mui/joy/styles';
import Home from './components/home';
import Story from './components/story';
import DrawerAppBar from './components/AppBar';
import Contact from './components/contact';
import LabelBottomNavigation from './components/footer';
import basetheme  from './theme/theme';
import { createTheme, Paper, responsiveFontSizes, ThemeProvider, useTheme, styled, typography, paperClasses } from '@mui/material';
import { red, pink, green, purple, grey, blue } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';


// Note: you can't put `joyTheme` inside Material UI's `extendMuiTheme(joyTheme)` because
//       some of the values in the Joy UI theme refers to CSS variables abd not raw colors.
//const muiTheme = extendMuiTheme();

// const joyTheme = extendJoyTheme({
//   // This is required to point to `var(--mui-*)` because we are using `CssVarsProvider` from Material UI.
//   cssVarPrefix: 'mui',
//   colorSchemes: {
//     light: {
//       palette: {
//         primary: {
//           ...blue,
//           solidColor: 'var(--mui-palette-primary-contrastText)',
//           solidBg: 'var(--mui-palette-primary-main)',
//           solidHoverBg: 'var(--mui-palette-primary-dark)',
//           plainColor: 'var(--mui-palette-primary-main)',
//           plainHoverBg:
//             'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
//           plainActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
//           outlinedBorder: 'rgba(var(--mui-palette-primary-mainChannel) / 0.5)',
//           outlinedColor: 'var(--mui-palette-primary-main)',
//           outlinedHoverBg:
//             'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
//           outlinedHoverBorder: 'var(--mui-palette-primary-main)',
//           outlinedActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
//         },
//         neutral: {
//           ...grey,
//         },
//         // Do the same for the `danger`, `info`, `success`, and `warning` palettes,
//         divider: 'var(--mui-palette-divider)',
//         text: {
//           tertiary: 'rgba(0 0 0 / 0.56)',
//         },
//       },
//     },
//     // Do the same for dark mode
//     // dark: { ... }
//   },
//   fontFamily: {
//     display: '"Roboto","Helvetica","Arial",sans-serif',
//     body: '"Roboto","Helvetica","Arial",sans-serif',
//   },
//   shadow: {
//     xs: `var(--mui-shadowRing), ${muiTheme.shadows[1]}`,
//     sm: `var(--mui-shadowRing), ${muiTheme.shadows[2]}`,
//     md: `var(--mui-shadowRing), ${muiTheme.shadows[4]}`,
//     lg: `var(--mui-shadowRing), ${muiTheme.shadows[8]}`,
//     xl: `var(--mui-shadowRing), ${muiTheme.shadows[12]}`,
//   },
// });
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
});
//const muiTheme = extendMuiTheme();

// You can use your own `deepmerge` function.
// muiTheme will deeply merge to joyTheme.
//const theme = deepmerge(joyTheme, muiTheme);

export default function App() {
  return (
   <CssVarsProvider>
 <ThemeProvider theme={theme}>  
    <Paper sx={{
background: 'linear-gradient(133deg, rgba(252,0,0,0.7273503151260504) 0%, rgba(246,246,246,1) 8%, rgba(240,240,240,1) 100%)',}}>   
     <CssBaseline /> 
    <DrawerAppBar/> 
     <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/Story" element={<Story />} />
    <Route path="/Contact" element={<Contact />} />
  </Routes> 
     <LabelBottomNavigation/>
    </Paper>
</ThemeProvider> 
 </CssVarsProvider> 
  );
}

//export default App;