import { createTheme } from "@mui/material/styles";
import { red, pink, green, purple, grey } from '@mui/material/colors';
//import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

const basetheme = createTheme({
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

})
export default basetheme;