import * as React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Container  from '@mui/material/Container';
import { Typography, useTheme } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActions';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CssBaseline from '@mui/material/CssBaseline';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));


export default function Home() {
	return (
    
	<Container maxWidth="xl" disableGutters="true">
    
		<Box sx={{  minHeight: '100vh', 
    width:'100vw',
    display:'flex', justifyContent:'center', 
    alignItems: 'center', 
    textAlign:'left', 
    backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/bg_new.jpeg'})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    }} >
      <Box sx={{width:'70%',}}>

<Stack spacing={1} direction="column">
			<Typography variant='h1'>
				Designing for the Human Experience
			</Typography>
      <Box sx={{ flexGrow: 2, display: { md: 'flex' } }}>
      <Button variant="contained" size="large">Learn More...</Button>
      </Box>
      </Stack>
		</Box>
      </Box>
      

		<Box sx={{ width: '100%' }}>
		<Card sx={{ maxWidth: 1200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/assets/winecontent.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>

	<Card sx={{ maxWidth: 1200, maxHeight: 100 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/assets/fadecontent.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>

	<Card sx={{ maxWidth: 1200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/assets/wsgrcontent.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>

	</Box>
	</Container>
		
			/*   <Grid item xs={12}>
		<Item><div className="hero-overlay">
                               
								<Button variant="contained">Contained</Button>
                        
                            
                        </div>
						</Item> 
		  </Grid>

		  <Grid item xs={12}>
			<Item> <h4 className="text-white">Prior Clients</h4></Item>
		  </Grid>
		  <Grid item xs={12}>
			<Item><img src="img/workbanner.png" className="img-fluid wow fadeInUp"/></Item>
		  </Grid>
		
		  <Grid item xs={12}>
			<Item>
			<div className="portfolio-item d-flex align-items-center">
                    <div className="text-box">
                        <h3 className="mb-3">Fade Tech Solutions</h3>
                    <p>Fade Tech Solutions needed a dashboard design and here is what the team and I came up with.</p>
                    <a href="fade.html" className="">Case Study...</a>
                    </div>
                    <div className="imageboxcontent">
                        <img src="img/fadecontent.png"/>   
                    </div>
                </div>

			</Item>

		  </Grid>
		  <Grid item xs={12}>
			<Item>
				<div className="portfolio-item d-flex align-items-center">
            
            <div className="imageboxcontent">
                 <img src="img/winecontent.png" /> 
            </div>	
            <div className="text-box">
                <h3 className="mt-5 mb-3">BK Wine Cellar's Digital Experience</h3>
    <p>A local wine store needed a well organized shopping experience for it's customers.</p>
            </div>
        </div></Item>
		  </Grid>
		  <Grid item xs={12}>
			<Item> <img src="img/wsgrcontent.png" />
			</Item>
		  </Grid>
		  <Grid item xs={12}>
<Item>

        
    <h2 className="mb-3">Process</h2>
    <img src="img/process.png"/>				
        
        
   

</Item>

		  </Grid>
		</Grid> 

		</Box>
*/

	
		
	  
	);
  }

