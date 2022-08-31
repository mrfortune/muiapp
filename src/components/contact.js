import * as React from "react";
import { styled, useTheme } from '@mui/material/styles';
import {Box, Container, Typography} from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link }  from 'react-router-dom';

function Mailto({ email, subject, body, ...props }) {
	return (
	  <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
		{props.children}
	  </a>
	);
  }
  
const Contact = () => {
	  return(	
<Container maxWidth="lg">	  
<Box mt={15} sx={{ flexGrow: 1, display: '-ms-flexbox', alignItems:'center', justifyContent:'center', maxWidth:'100vw', }}>
	<Grid container spacing={2}>
		
	</Grid>
	
	
	<Typography variant="h1">
Contact Us
	</Typography>
	<Typography mt={4} style={{ textDecorationLine:'none',}}><Mailto email="rharris@worldshaker.com" subject="Seeking more info" body="Hi, Robert,">
    Send me an email to get more info, or just to say, "Hi!".
  </Mailto>
  </Typography>
  <Typography mt = {2}variant="body1">Give me a call: 646.620.4438

  </Typography>
	  </Box> 
</Container>
	  )
  }
export default Contact
