import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Stack, Link, Container } from '@mui/material';
import { Margin } from '@mui/icons-material';
const w = window.innerWidth;
const Fmcg = () => {
  return (
    <div>
      <Container  maxWidth= 'false' sx={{display:'flex',alignItems:'centre',  flexDirection: 'column',justifyContent:'centre'}}>
      <Typography variant='h4'  mt={6} ml={3} mb={2} color={'#160052'}>Fast Moving Consumer Goods (FMCG)</Typography>

      <Typography variant='h6'  ml={3} mb={2} >ITC is one of India's leading marketer in Fast Moving Consumer Goods Business.</Typography>
            <Box m={3}style={{background: 'linear-gradient(to right, #01D7FF, #8009DC)',height:250, display:'flex',alignItems:'center', borderRadius:18}} >
                <Typography mx={10}fontSize={24} fontWeight={300} width={600} color={'white'}>The new FMCG businesses, nurtured over the last decade or so, have crafted a vibrant portfolio of</Typography>
                <img style={{height:200, marginRight:2}}  src={'	https://www.itcportal.com/assets/images/25_mothers_info.png'}/>
            </Box>
       <Typography  variant='h6'  ml={3} mb={2}  >It is ITC's strategic intent to secure long-term growth by synergising and blending the diverse pool of competencies residing in 
        its various businesses to exploit emerging opportunities in the FMCG sector.</Typography>
        <Typography variant='p'ml={3} mb={6} color={'#4E4E4E'}>Some of ITC's brands that have gained significant market standing among consumers are Aashirvaad, Sunfeast, Bingo!, YiPPee!, Candyman, mint-o and Kitchens of India in the Branded Packaged Foods space; EDW Essenza, Fiama, Vivel and Superia in the Personal Care Products segment;
             Classmate and Paperkraft in Education & Stationery products; Mangaldeep in Agarbattis as well as Aim in Matches.</Typography>
      </Container>
    </div>
  )
}

export default Fmcg 