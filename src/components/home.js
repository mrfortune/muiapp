import * as React from "react";
import Card from '@mui/material/Card';
import {Box, Stack, Container} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Typography } from "@mui/material";
import  Hero from './Hero';


const Home = () => {
  return(
<Container maxWidth="false" disableGutters={true}>
  <Hero>
    </Hero>  
	
      {/* <Box>
<CardMedia  sx={{width:'100%',}} component="img" height="225" image="/assets/workbanner.png"/>
      </Box> */}
<Stack  display="flex" justifyContent="center" mt={{ xs: 6, sm: 8, lg: 18 }}  sx={{alignItems:'center',}}>
<Box display="flex" justifyContent="center" mb={{xs: 12, sm: 18, md: 18, lg: 18}} sx={{ alignItems:'center', justifyContent:'center' }}>
<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
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
  <Box display="flex" justifyContent="center" mb={{xs: 12, sm: 18, md: 18, lg: 18}} sx={{ alignItems:'center', justifyContent:'center' }}>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
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
    <Box  display="flex" justifyContent="center" mb={{xs: 12, sm: 18, md: 18, lg: 18}} sx={{ alignItems:'center' }}>
		
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
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
</Stack>
		

   
	</Container>

  )
}
export default Home
    

    
	

		
		

