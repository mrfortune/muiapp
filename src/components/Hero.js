import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { CssVarsProvider } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Hero() {
  return (
    <CssVarsProvider>
    <Box
      component="ul" display="flex" justifyContent="center" alignItems="center" elevation={0} 
      sx={{ display: 'flex', gap: 2, boxShadow: 0, borderRadius: '0%', border: 0, flexWrap: 'wrap', p: 0, m: 0,}}
    >
      <Card component="li" sx={{ flexGrow: 1, minHeight:'100vh', border: 0, background:'none', borderRadius: '0%', boxShadow: 0,}}>
        <CardCover sx={{height:'100vh', width:'100vw',  boxShadow: 0,}}>
          <img
            src="./assets/bg_new.png"
            srcSet="/assets/bg_new.png"
            alt=""
          />
        </CardCover>
        <CardContent display="flex" alignItems="center" justifyContent="center" sx={{ gap: 1, maxWidth:'55vw',  boxShadow: 0,  }}>
          {/* <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Image
          </Typography> */}
          <Typography level="h1"
            fontWeight="lg"
            textColor="smokeblack"
            mt={{ xs: 12, sm: 18, lg: 30 }}>
				Data-driven Design Thinking that Centers the Human.
			</Typography>
      <Typography level='body1'>Employing the user centered, hands-on approach to problem solving through UX design and engineering digital products.</Typography>
      <Box sx={{ flexGrow: 2, width: '140px', height:'44px', display: { md: 'flex' } }}>
      <Button variant="solid" sx={{height: '40px', }}>Learn More...</Button>
      </Box>
        </CardContent>
      </Card>
      {/* <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Video
          </Typography>
        </CardContent>
      </Card> */}
    </Box>
    </CssVarsProvider>
  );
}
