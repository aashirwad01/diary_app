import { Card } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Modal } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from './modalReducer';


export default function ModalWrapper({children,header}) {
    const dispatch = useDispatch();
  return (
   <Modal open={true} sx={{
    top:"45%",
    left:"25%",
    width: "50%",
    height:"100%"}}
    onClose={()=>dispatch(closeModal())} >
        
        <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
 >

  <Grid item xs={3}>
  <Card>
        {header && <Typography align="center">{header}</Typography>}
        <Box>
        {children}
        </Box>
        
        </Card>
  </Grid>      
 </Grid>     
        
        
</Modal>
  )
}
