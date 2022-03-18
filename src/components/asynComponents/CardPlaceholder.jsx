import {
    
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
   
    Skeleton,
   
  } from "@mui/material";
  import React from "react";
  
  import WatchLaterIcon from "@mui/icons-material/WatchLater";
  import RoomIcon from "@mui/icons-material/Room";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import Masonry from 'react-masonry-css'

  
const breakpoints={
    default:3,
    1100:2,
    700:1
  
  }

export default function CardPlaceholder() {
  return (

    <Grid container>
        <Grid item xs={4}>
            <Box sx={{mt:'1.2rem' , marginLeft:'5rem'}}>
            <Card  elevation={0}>
                <CardContent>
                <Skeleton width='5rem' height='30rem' animation="wave"     />
                </CardContent>
            </Card>
            </Box>
        
      </Grid>
        <Grid item xs={8}>
        <Container> 


        <Masonry 
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName='my-masonry-grid_column'
      >
<Box>
<Card elevation={3} >
    <CardHeader 
    avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
    
    
    title= {<Skeleton animation="wave"   width='1rem' />}
    subheader={<Skeleton animation="wave"   width='1rem' />}
    />

<CardContent>
<Skeleton animation="wave"   width='3rem' />
    </CardContent>

    <CardContent>
    <Skeleton animation="wave"   width='12rem' height='10rem' />
       
    </CardContent>
    
</Card>
  </Box> 

  <Box>
<Card elevation={3} >
    <CardHeader 
    avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
    
    
    title= {<Skeleton animation="wave"   width='1rem' />}
    subheader={<Skeleton animation="wave"   width='1rem' />}
    />

<CardContent>
<Skeleton animation="wave"   width='3rem' />
    </CardContent>

    <CardContent>
    <Skeleton animation="wave"   width='12rem' height='10rem' />
       
    </CardContent>
    
</Card>
  </Box> 


  <Box>
<Card elevation={3} >
    <CardHeader 
    avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
    
    
    title= {<Skeleton animation="wave"   width='1rem' />}
    subheader={<Skeleton animation="wave"   width='1rem' />}
    />

<CardContent>
<Skeleton animation="wave"   width='1rem' />
    </CardContent>

    <CardContent>
    <Skeleton animation="wave"   width='12rem' height='10rem' />
       
    </CardContent>
    
</Card>
  </Box> 


  <Box>
<Card elevation={3} >
    <CardHeader 
    avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
    
    
    title= {<Skeleton animation="wave"   width='1rem' />}
    subheader={<Skeleton animation="wave"   width='1rem' />}
    />

<CardContent>
<Skeleton animation="wave"   width='1rem' />
    </CardContent>

    <CardContent>
    <Skeleton animation="wave"  width='12rem' height='10rem' />
    
    </CardContent>
    
</Card>
  </Box> 
        
        
        
        
        
        
  </Masonry>
  </Container>
      </Grid>
    </Grid>

    
  )
}