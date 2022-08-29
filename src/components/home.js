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
import ContentCardsGradient from "./Card";
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import CardActionArea from '@mui/material/CardActions';
import  Hero from './Hero';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ThemeProvider } from "@mui/joy";
import basetheme from "../theme/Theme";

const Home = () => {
  return(
<Container maxWidth="false" disableGutters="true">
  <Hero>
    </Hero>  
		{/* <Box sx={{  
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
      </Box> */}
      
<Stack  display="flex" justifyContent="center" mt={{ xs: 6, sm: 8, lg: 18 }}  sx={{alignItems:'center',}}>
<Box display="flex" justifyContent="center" mb={{xs: 12, sm: 18, md: 18, lg: 18}} sx={{ alignItems:'center', }}>
		
	<ContentCardsGradient>

  </ContentCardsGradient>
        

	</Box>
  <Box display="flex" justifyContent="center" mb={{xs: 12, sm: 18, md: 18, lg: 18}} sx={{ alignItems:'center', justifyContent:'center' }}>
		
    <ContentCardsGradient>
      
    </ContentCardsGradient>
          
  
    </Box> 
    <Box  display="flex" justifyContent="center" mb={{xs: 12, sm: 18, md: 18, lg: 18}} sx={{ alignItems:'center' }}>
		
    <ContentCardsGradient>
      
    </ContentCardsGradient>
          
  
    </Box>
</Stack>
		

   
	</Container>

  )
}
export default Home
    

    
	

		
		

