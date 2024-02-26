import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Stack, Link, Container, ListItem } from '@mui/material';
const w = window.innerWidth;
const address = [
  "ITC LIMITED",
  "Virginia House", 
  "37, J. L. Nehru Road",
  "Kolkata - 700071, India",
  "Ph: +91-33-22889371",
  "Working Hours:",
  "(Monday to Friday)",
  "- 9:00AM to 6:00PM",
  "Fax: +91-33-22880655",
  "Corporate Identity Number:",
  "L16005WB1910PLC001985",
  "For any queries or grievances, contact Mr. Aurko Dasgupta at"
]
const AboutITC=[
"Our Profile",
"Our Values",
"ITC Research and Development",
"ITC Leadership",
"Leadership Speaks",
"Our Policies",
"Investor Relations",
"Awards & Recognitions",
]
const Business=[
  "Fast Moving Consumer",
  "Goods (FMCG)",
  "Hotels",
  "Paperboards &",
  "Specialty Papers",
  "Packaging",
  "Agri Business",
  "Information Technology",
  "Group Companies"]
const Sustainablity=[
 " ITC's Sustainability Initiatives",
 " Corporate Social Responsibility",
 " Environment, Health & Safety",
 " ITC Sustainability Policies",
 " ITC CSR Policy",
 " ITC Social Investments Impact Studies",
 " Sustainability Reports",
 " RFPs FOR IMPACT ASSESSMENT & OTHER STUDIES"
  ]

const mediacenter =[
"Key Facts About ITC",
"Business Information",
"Everyday Stories From ITC",
"ITC In The News",
"Press Releases",
"Press Reports",
"ITC Newsroom",
]

const brands =["Brands",
  "Investor Relations",
  "Careers",
  "ITC Resources",
  "Downloads",
  "Contact Us",
  "Store Locator",
  "ITC on Social Media",
  "Sitemap"]

const Footer = () => {
  return (
    <div>
    <Toolbar sx={{display:'flex', float:'right'}}> 
    <Button sx={{color:'black'}}> <img src={'https://www.itcportal.com/images/icon2.png'}/>ITC on socialmedia</Button>|
    <Button sx={{color:'black'}}> <img src={'https://www.itcportal.com/images/icon3.png'}/>ITC Apps</Button>|
    <Button sx={{color:'black'}}> <img src={'https://www.itcportal.com/images/icon4.png'}/>Downloads & websites</Button> </Toolbar>
   <Box sx={{backgroundColor:'#00A2E1',width:w, height:300, display:'flex', p:8}}>
      <ListItem  sx={{color:'#c7d2ff',display:'block'}}>
        <Typography variant='h6' sx={{color:'#fcffff'}}>Address</Typography>
         {address.map((item) => (
                <Typography display={'block'} sx={{color:'#c7d2ff',fontSize:15}}>{item}</Typography>
            ))}
      </ListItem>
      <ListItem  sx={{color:'#c7d2ff',display:'block'}}>
      <Typography variant='h6' sx={{color:'#fcffff'}}>AboutITC</Typography>
         {AboutITC.map((item) => (
                <Typography display={'block'} sx={{color:'#c7d2ff', fontSize:13}}>{item}</Typography>
            ))}
      </ListItem>
      <ListItem  sx={{color:'#c7d2ff',display:'block'}}>
      <Typography variant='h6' sx={{color:'#fcffff'}}>Business</Typography>
         {Business.map((item) => (
                <Typography display={'block'} sx={{color:'#c7d2ff',fontSize:13}}>{item}</Typography>
            ))}
      </ListItem>
      <ListItem  sx={{color:'#c7d2ff',display:'block'}}>
      <Typography variant='h6' sx={{color:'#fcffff'}}>mediacenter</Typography>
         {mediacenter.map((item) => (
                <Typography display={'block'} sx={{color:'#c7d2ff',fontSize:13}}>{item}</Typography>
            ))}
      </ListItem>
      <ListItem  sx={{color:'#c7d2ff',display:'block'}}>
      <Typography variant='h6' sx={{color:'#fcffff'}}>Sustainablity</Typography>
         {Sustainablity.map((item) => (
                <Typography display={'block'} sx={{color:'#c7d2ff',fontSize:13}}>{item}</Typography>
            ))}
      </ListItem>
      <ListItem  sx={{color:'#c7d2ff',display:'block',fontSize:13}}>
      <Typography variant='h6' sx={{color:'#fcffff'}}>Brands</Typography>
         {brands.map((item) => (
                <Typography display={'block'} sx={{color:'#c7d2ff',fontSize:13}}>{item}</Typography>
            ))}
      </ListItem>
   </Box>
   <Toolbar>
    <Typography flexGrow={1} sx={{color:'#6B6B9B'}}>© ITC Limited 2024</Typography>
    <Button sx={{color:'#6B6B9B'}}><Typography sx={{fontSize:'9'}}>Terms of Use Privacy</Typography></Button>
    <Button sx={{color:'#6B6B9B'}}><Typography sx={{fontSize:'9'}}> Policy</Typography> </Button>
    <Button sx={{color:'#6B6B9B'}}><Typography sx={{fontSize:'9'}}>Sitemap</Typography></Button>
    </Toolbar>
   </div>
  )
}

export default Footer