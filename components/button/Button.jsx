import * as React from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';

// import "./Buttons.css"
export default function BasicButtons() {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap',paddingLeft:"165px",paddingTop:"25px"}}>
      <Button style={{ fontWeight:"600",fontSize:"17px",fontFamily:"sans-serif",width:"165px",height:"50px",background:"blueviolet"}}>Get Started</Button>
      
    </Box>
  );
}
