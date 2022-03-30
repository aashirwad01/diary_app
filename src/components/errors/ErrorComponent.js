import { Button , Box } from '@mui/material'
import { Typography } from '@mui/material'
import { Card } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CardContent, CardHeader } from '@mui/material'

export default function ErrorComponent() {

    const {error} = useSelector((state)=>state.async)

  return (

    
    <Card >
        
       
        <CardContent>
            <div
            style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-around',
                alignItems:'center',
                

            }}   
            
            >
            <Typography variant='h2' >{error?.message || 'Oops we have error'}</Typography>
        <Button variant='contained' color='secondary'
          component={ Link } to='/' sx={{mt:20}}  >
            Return to Dashboard
        </Button>

            </div>
            

        </CardContent>
        
    </Card>
   
      
  )
}