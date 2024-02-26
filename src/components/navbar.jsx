import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Stack, Link } from '@mui/material';
const w = window.innerWidth;

const navlinks = ['About ITC','Brands','Business','sustainablity','Mediacentre','Investor releation','Careers','ITC resource']




const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{width:w}}>
    <Toolbar sx={{backgroundColor:'white',
                 display: 'flex' ,fontFamily: 'Arial', height:100, 
                 }}>
<Box  sx={{backgroundColor:'white',
                  flexGrow: 1, fontFamily: 'Arial'
                 }}>
      <img
          edge="start"
        src={'https://www.itcportal.com/images/logo_itc.png'}
        alt={'ITC'}
        loading="lazy"
       
      />
</Box>


      <Stack direction='row' spacing={2} > 
      {navlinks.map((item) => (
              <Button disableRipple key={item} variant='text'  sx={{ "&:hover": { backgroundColor: "transparent"}} }>
                <Link href="#"  underline="none" sx={{ textDecoration: "none", color:'#002D71',":hover": {color:'#058CEB'}}}>{item}</Link>
              </Button>
            ))}
        </Stack>

    </Toolbar>
  </AppBar>
  )
}

export default Navbar