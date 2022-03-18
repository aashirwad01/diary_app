import { Backdrop, Button, CircularProgress } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

export default function LoadingComponent({content='Loading ...'}) {
    
    const {loading} = useSelector(state => state.async)
  
  return (
    <div>
       <Backdrop
      sx={{ color: '#999999', backgroundColor:'#FFFFFF' , }}
      open={loading}
    >
      
      <CircularProgress color="inherit" size={50}  />
      
    
      
    </Backdrop>
   
  </div>
  )
}