import { Avatar, Box, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { useDispatch, useSelector } from 'react-redux'
import { deleteCard } from './cardActions';
import { useNavigate, useParams } from 'react-router-dom';
import { format } from "date-fns";
import { deleteCardinFirestore } from '../firestore/firestoreService';


export default function CardComponent({cardall}) {

  const dispatch= useDispatch()
  const navigate =useNavigate()
  
    const [notes,setNotes]=React.useState([])

    const handleDelete =()=>{
        
        const newNotes=5
        setNotes(newNotes)
    }

    const handleEditCard=(e,val)=>{
      // console.log("hei")
      // console.log(val)
      navigate(`/edit/${val}`)
        
    }

  return (
    <Box>
<Card elevation={3} >
    <CardHeader 
    avatar={
      <Avatar >
        {cardall.category[0].toUpperCase()}
      </Avatar>
    }
    action={
        <Box>
         <IconButton onClick={(e)=>handleEditCard(e,cardall.id)}>
            <ModeEditOutlineIcon />
        </IconButton>

        <IconButton onClick={()=> deleteCardinFirestore(cardall.id)
          
          // dispatch(deleteCard(cardall.id))
          
          }>
            <DeleteOutlineIcon />
        </IconButton>
       

        </Box>
    }
    title={cardall.title}
    subheader={`${cardall.category}  `}
    />

<CardContent>
    <Typography color="textSecondary">
        {format(cardall.todate,'MMMM dd, yyyy ')}
        
        </Typography>
    </CardContent>

    <CardContent>
        <Typography variant="body2"  >
         {cardall.details}
        </Typography>
       
    </CardContent>
    
</Card>
  </Box>
  )
}
