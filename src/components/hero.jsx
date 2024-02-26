import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Stack, Link } from '@mui/material';
const w = window.innerWidth;

const Hero = () => {
  return (
    <div style={{height:564}}>
      <Toolbar sx={{height:40, backgroundColor:'#05279E',width:w,}}>
               <Link  underline="none" sx={{ textDecoration: "none", color:'White'}}>Home</Link><p style={{color:'white'}}> / </p> 
               <Link  underline="none" sx={{ textDecoration: "none", color:'White'}}>Business</Link> <p style={{color:'white'}}> / </p>
               <Link  underline="none" sx={{ textDecoration: "none", color:'White'}}>FMCG</Link>
      </Toolbar>
      <img src={'https://www.itcportal.com/assets/images/bluebg_highlights.jpg'} style={{width:w,height:500}} />
      <Typography  color={'white'} position={'absolute'} top={180} left={170} fontWeight={700} fontSize={55}>FMCG</Typography>
    <Box position={'absolute'} top={280} left={170}> <img src={'https://www.itcportal.com/assets/images/fmcg_banner.png'} /></Box> 
    </div>
  )
}

export default Hero