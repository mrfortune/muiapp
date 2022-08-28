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

export default function Home() {
	return (
    
	<Container maxWidth="false" disableGutters="true">
    
		<Box sx={{  
    height: '100vh', 
    maxHeight:'100vh',
    maxWidth:'100vw',
    display:'flex', 
    justifyContent:'left', 
    alignItems: 'center', 
    textAlign:'left', 
    backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/bg_new.png'})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    }} >
      <Box sx={{width:'65vw',}}>

<Stack spacing={1} direction="column">
			<Typography variant='h1' sx={{width: "40vw",}}>
				Centering the Human in our Design Approach
			</Typography>
      <Typography variant='body1' sx={{width:"40vw",}}>Employing the user centered, hands-on approach to problem solving through UX design and engineering digital products.</Typography>
      <Box sx={{ flexGrow: 2, display: { md: 'flex' } }}>
      <Button variant="contained" size="large">Learn More...</Button>
      </Box>
      </Stack>
		</Box>
      </Box>
      

		<Box sx={{ width: '100%', alignItems:'center' }}>
		<Card sx={{  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image="https://placehold.jp/1200x630.png"
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

	<Card sx={{  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
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

	<Card sx={{  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
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

