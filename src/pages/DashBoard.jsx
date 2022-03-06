import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Cards from '../components/cardDashboard/Cards'
import SideBar from '../components/cardDashboard/SideBar'


export default function DashBoard() {

  const {cardsall}=useSelector(state =>state.card);


  return (
    <Grid container>
      
      <Grid item xs={4}>
       <SideBar />
      </Grid>
      <Grid item xs={8}>
        <Cards cardsall={cardsall} />
      </Grid>
    </Grid>
  )
}
