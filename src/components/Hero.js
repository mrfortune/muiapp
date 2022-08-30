import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Container  from '@mui/material/Container';

const Hero = () => {
  return (
    <Container disableGutters="true" maxWidth="false">
<Box sx={{ 
backgroundImage:`url(${ process.env.PUBLIC_URL + "/assets/bg_new.png"})`, 
minHeight:'100vh',
width:'100vw',
backgroundRepeat:"no-repeat",
backgroundSize:"cover",
display:'flex',
alignSelf:'center',
flexDirection:'column',
alignItems:'center',
justifyContent:'center',

}}>
</Box>
    
</Container>
  );
}
export default Hero