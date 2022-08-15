import * as React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));
  
  export default function Contact() {
	return (
	  <Box sx={{ flexGrow: 1 }}>
		<Grid container spacing={2}>
		  <Grid item xs={8}>
			<Item>xs=8</Item>
		  </Grid>
		  <Grid item xs={4}>
			<Item>xs=4</Item>
		  </Grid>
		  <Grid item xs={4}>
			<Item>xs=4</Item>
		  </Grid>
		  <Grid item xs={8}>
			<Item>xs=8</Item>
		  </Grid>
		</Grid>
	  </Box>
	);
  }
/* const Contact = () => {
	return <div className="App"/>
<main/>
	<section/>
<div class="container" style="height:90vh;">
  <div class="row">
       <div class="col-12">
		<h1 class="mt-5 mb-4 display-1">Contact Info</h1>
		<ul>
<li><div class="contact-item"><p><span><i class="fas fa-map-marker" aria-hidden="true"></i></span>&nbsp;Address: 183 Sterling Street Brooklyn, New York 11225 </p></div></li>

		</ul>
          
          <div class="contact-item"><p><span><i class="fas fa-phone" aria-hidden="true"></i> </span>&nbsp;Phone: 1.646.620.4438</p></div>
          <div class="contact-item"><p><span><i class="fas fa-envelope" aria-hidden="true"></i></span>&nbsp;Email: rharris@worldshaker.com</p></div>
		  <div class="contact-item social d-flex"><a href="http://linkedin.com/in/robertsharris">
			  <i class="fab fa-linkedin" aria-hidden="true"></i>
			<a href="http://linkedin.com/in/robertsharris"/><i class="fab fa-facebook-square" aria-hidden="true"></i>
				<a href="http://linkedin.com/in/robertsharris"/><i class="fab fa-youtube-square" aria-hidden="true"></i>





};
export default Contact;
 */