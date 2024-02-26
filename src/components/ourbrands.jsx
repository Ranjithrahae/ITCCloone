import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Stack, Link } from '@mui/material';
const w = window.innerWidth;
const img =[{color:'#EF0000',
            img:'	https://www.itcportal.com/assets/images/fmcg/fmcg-aashirvaad-logo.png'},
            {color:'#077F39',
            img: 'https://www.itcportal.com/assets/images/fmcg/fmcg-b-natural-logo.png'},
            {color:'#C12030',
            img:'	https://www.itcportal.com/assets/images/fmcg/fmcg-sunfeast-logo.png'},
            {color:'#FFD202',
            img:'	https://www.itcportal.com/assets/images/fmcg/fmcg-bingo-logo.png'},
          ]


const Ourbrands = () => {
  return (
    <div>
      <Box pt={5} style={{background: 'linear-gradient(to right, #7F0CDD, #00D8FF)',width:w,height:500}}> <Typography color={'white'} mx={4} my={5} variant='h3' display={'inline'}>ITC 
      <Typography mx={1} my={5} variant='h3'fontSize={50} fontWeight={600} display={'inline'}>Brands</Typography></Typography>
      <Box mt={4} sx={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}} >
       
      {img.map((item) => ( 
      <Box  key={item.color}  sx={{backgroundColor:item.color, width:300,height:300, display:'flex',justifyContent:'center',alignItems:'center',borderRadius:5}}>
     
     
              <Button disableRipple key={item.img} variant='text' sx={{ "&:hover": { backgroundColor: "transparent"}} }>
              <img src={item.img}/>   
              </Button>
     
      </Box>
       ))}
       </Box>
       </Box>
    </div>
  )
}

export default Ourbrands