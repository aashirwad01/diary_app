import { Button, Container, FormControl, FormControlLabel, FormLabel, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Radio } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import cuid from 'cuid';
import { createCard, updateCard } from '../components/cardDashboard/cardActions';
import { purple } from '@mui/material/colors';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { toast } from "react-toastify";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";




export default function AddDiary() {

  let navigate = useNavigate();
  const dispatch = useDispatch()
  const {id}=useParams()
  
  var val;
  var selectedEvent = useSelector((state) =>{
    
   if((state.card.cardsall).find((e) => e.id === id)){
    val=(state.card.cardsall).find((e) => e.id === id)
   }
     

   
  });

 
 

  


  
  // const [title,setTitle]=useState('')
  // const [details, setDetails] = useState('')
  const [titleError,setTitleError]=useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [categoryError,setCategoryError]=useState(false)
  const [dateError,setDateError]= useState(false)
  const [todateValue,setToDatevalue]=useState('')

  const [dateval,setDateVal] = useState('')

  const initialValues= val ?? {
    title:'',
    category:'',
    details:'',
    
  }

  const [values,setValues]=useState(initialValues)
 

  const handleSubmit =(e)=>{
    e.preventDefault() //default action of a form being submitted is refresh the page so prevent default is used

    setDetailsError(false)
    setTitleError(false)
    setCategoryError(false)
    setDateError(false)

    console.log(values)

    if((values.title!=='')&&(values.details!=='')&&(values.category!=='') && (todateValue!==''))
    {
      
      
      val
      ? dispatch(updateCard({ ...val, ...values })): dispatch(createCard({
        ...values,
        id: cuid(),
        todate:todateValue
        
      }));
      navigate('/')
    }

    else{
    toast.error('Please fill all the values')
    setDetailsError(true)
    setTitleError(true)
    setCategoryError(true)
    setDateError(true)
    }



   

    

  }

    function handleInputChange(e) {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
     
      
    }

    
    
    // if (title && details){
    //   fetch('http://localhost:8000/notes',{
    //     method:'POST',
    //     headers:{"Content-type":"application/json"},
    //     body:JSON.stringify({title,details,category})
    //   }).then(()=>history.push('/'))
    //   console.log(title,details,category)
    
  return (
   
    <Container sx={{marginTop:10,
      marginLeft:'1vw',
      display:'block'}}>
      <Typography
         variant="h6"
         color='textSecondary' 
         component="h2"
         gutterBottom
      >
        {val ? "Edit the Diary Entry" : "Add Diary"}

      </Typography>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
          disableFuture
          
          label="Select Date"
          openTo="year"
          views={['year', 'month', 'day']}
          value={todateValue}
          name='todate' 
          onChange={(e) =>{
            setToDatevalue(e)
           
          
          } }
          variant='outlined'
        
        
          error={dateError}
          renderInput={(params) => <TextField   {...params} />}
        />
      </LocalizationProvider>
     <TextField
      
     onChange={(e) => handleInputChange(e)}

     sx={{marginTop:2,
      marginBottom:2,
      display:'block'}}
      name='title'
     label='Note Title'
     variant='outlined'
     color='secondary'
     fullWidth
     required
     value={values.title}
     error={titleError}
     />

    <TextField 

    onChange={(e) => handleInputChange(e)}

    sx={{marginTop:2,
      marginBottom:2,
      display:'block'}}
     label='Details'
     variant='outlined'
     color='secondary'
     multiline
     rows={4}
     fullWidth
     required
     name='details'
     value={values.details}
     error={detailsError}
     />

     {/* <TextField type='date' onChange={(e)=>{{
       
       console.log(e.target.value)
       setDateVal(e.target.value)

       console.log(dateval)
   }
   
   }} />

  <h1>{dateval}</h1> */}

    <FormControl
    sx={{marginTop:4,
      marginBottom:4,
      display:'block'}} 
    //this is wrapper which encloses radio with form label
   
    error={categoryError}
    >

    
    <FormLabel>Note Category</FormLabel>
     <RadioGroup // this allows to group radio buttons such that only one can be selected
     // if multiple use checkbox
     value={values.category}
      name='category'
     onChange={(e) => handleInputChange(e)}
     >
       
    <FormControlLabel // To Provide label this is used
    value="work" 
    control={<Radio />} 
    label="Work"
    />
    <FormControlLabel 
    value="personal" 
    control={<Radio />} 
    label="Personal"
    />
    <FormControlLabel 
    value="mistakes" 
    control={<Radio />} 
    label="Mistakes"
    />
    <FormControlLabel 
    value="random" 
    control={<Radio />} 
    label="Random"
    />
     </RadioGroup>

     </FormControl>
     


<Button 
    //  className={classes.btn}


     onClick={()=>{console.log('You clicked me')}}
     type="submit"
     color="secondary"
     variant="contained"
    //  disableElevation // to disable elevation and drop shadow
   
    endIcon={<KeyboardArrowRightIcon/>}
     
     >
       Submit
     </Button>

    
     </form>

    </Container>
   
  )
}
