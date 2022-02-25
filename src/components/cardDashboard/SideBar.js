import { Box, Tab, Tabs } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { FILTER_ALL, FILTER_MISTAKES, FILTER_PERSONAL, FILTER_RANDOM, FILTER_WORK } from './sidebarReducer';


export default function SideBar() {
    const dispatch =useDispatch()
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height:"100vh" ,pt:"10vh" }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' , width:"22vw" }}
        >
          <Tab label="All" onClick={()=> dispatch({
        type:FILTER_ALL } )} />

          <Tab label="Work" onClick={()=> dispatch({
        type:FILTER_WORK } )}  />
          <Tab label="Personal"  onClick={()=> dispatch({
        type:FILTER_PERSONAL } )} />
          <Tab label="Mistakes"  onClick={()=> dispatch({
        type:FILTER_MISTAKES } )}/>
          <Tab label="Random" onClick={()=> dispatch({
        type:FILTER_RANDOM } )}/>
         
          
        </Tabs>
        
      </Box>
    )
}
