
import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Stack, Link, Grid } from '@mui/material';
import { Directions } from '@mui/icons-material';

const w = window.innerWidth
const card=[{name:'Foods',Icon:""},
            {name:'Personal care',Icon:''},
            {name:'Education and stationary',Icon:""},
            {name:'Safety matches',Icon:""},
            {name:'Agarbattis',Icon:""},
            {name:'Cigrattes',Icon:""}
    ]



const Portfolio = () => {
  return (
    
 <Box pt={5} style={{background: 'linear-gradient(to right, #40A15F, #FDCC01)',width:w,height:500, display:'flex'}} sx={{alignItems:'center', justifyContent:'center'}}> 
     <Box> <Typography color={'white'}mx={1} my={1} variant='h6'fontSize={30} >ITC's</Typography>
      <Typography color={'white'}mx={1} my={1} variant='h6'fontSize={30} >FMCG'S Portfolio</Typography></Box>
      <Grid sx={{ml:6}} width={800} height={450} container Spacing={2} >
       

      {card.map((item) => ( 
              <Grid item xs={3} key={item.name}  sx={{backgroundColor: "white",color:'black',mx:1,p:2, height:200,width:200,
               "&:hover": { backgroundColor: "#1B2355",color:'white',transition: 'backgroundSize 0.3s ease-in, color 0.3s ease-in'} } }>
              <Typography> {item.name}</Typography>
               
              <img src={item.Icon}/>   
              </Grid>
       ))}
      </Grid>
 </Box>

    
  )
}

export default Portfolio