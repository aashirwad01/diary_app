import { Box, Tab, Tabs } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { FILTER_ALL, FILTER_DATE, FILTER_MISTAKES, FILTER_PERSONAL, FILTER_RANDOM, FILTER_WORK } from './sidebarReducer';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

export default function SideBar() {
    const dispatch =useDispatch()
    const [value, setValue] = React.useState(0);
    const [dateval,setDateVal]=useState('')

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const initialRender = useRef(true)

    useEffect(() => {

      if(initialRender.current){
        initialRender.current = false;
      }

      else{
        console.log(`${dateval} value 2`)

      dispatch({
        type:FILTER_DATE,
        payload:dateval
      
      } )
      }

      
    }, [dateval])
    

    

    const handleDateChange = ()=> {
     
      
     
      }
  
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


       

        <Tab component='div' label={ <>  <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
          disableFuture
          label="Date"
          openTo="year"
          views={['year', 'month', 'day']}
         
          onChange={(newValue) => {

            try{
             
            setDateVal(newValue);
            console.log(`${dateval} value 1`)
            

            }catch(e){
              console.log(e)
            }
            

            // use async await
           
          }}
          value={dateval}
          renderInput={(params) => <TextField {...params} />}
        />
         {/* <Button onClick={()=>handleDateChange()} >Submit Date</Button> */}
      </LocalizationProvider>
     
      </>
      }
        
        />


          
        </Tabs>
        
      </Box>
    )
}
