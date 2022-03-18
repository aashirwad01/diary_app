import React from 'react'
import CardComponent from './CardComponent'
import Masonry from 'react-masonry-css'
import { Box, Container } from '@mui/material'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'
import { toast } from "react-toastify";

const breakpoints={
  default:3,
  1100:2,
  700:1

}


export default function Cards({cardsall}) {
  const tabselected=useSelector(state=>state.filtertab.data)
  const dateselected = useSelector(state => { if(tabselected==='date') {
    
    return state.filtertab.todate
}
return null
})
    
    
if(tabselected ==='date'){
    
  if(isNaN(dateselected)){
    console.log('kk')
    toast.error('Invalid Date selected', {
      toastId:'invalid'
    })
    cardstoprint=cardsall
  }
 
  if(!isNaN(dateselected)){
    
    
  var datesel= format(dateselected,'dd')
  var monthsel = format(dateselected,'MMMM')
  var yearsel=format(dateselected,'yyyy')
  
  console.log(cardsall.filter(evt => format(evt.todate,'MMMM dd, yyyy ') ===format(dateselected , 'MMMM dd, yyyy ')))

  cardstoprint=cardsall.filter(evt => format(evt.todate,'MMMM dd, yyyy ') ===format(dateselected , 'MMMM dd, yyyy '))
  
  if(cardstoprint.length){
    toast.success("Date matched showing All Entries" , {
      toastId:'success'
    })
  }
 else if(cardstoprint.length===0){
    cardstoprint=cardsall.filter(evt => format(evt.todate,'yyyy') ===yearsel)

    if(cardstoprint.length){
      toast.info('Showing Entries where year Matched', {
        toastId:'year match'
      })
    }
    else if(cardstoprint.length===0){
      cardstoprint=cardsall.filter(evt => format(evt.todate,'MMMM') ===monthsel)
      if(cardstoprint.length){
        toast.info('Showing Entries where month Matched' , {
          toastId:'month match'
        })
      }

      else if(cardstoprint.length===0){
        cardstoprint=cardsall.filter(evt => format(evt.todate,'dd') ===datesel)
        if(cardstoprint.length){
          toast.info('Showing Entries where Date Matched'
          , {
            toastId:'date match'
          })
        }
        else if(cardstoprint.length===0){
          cardstoprint=cardsall
          toast.error('Nothing matched showing all entries'
          , {
            toastId:'no match'
          })
        }
      }
    }



   
    
    
  }
  }
 
  
  // console.log(cardsall.filter(evt => evt.category ===tabselected))
 

}
  
else if(tabselected !=='all' ){
    var cardstoprint= cardsall.filter(evt => evt.category ===tabselected)
    
   
  }
  
  
else{
    cardstoprint=cardsall
  }
 
  return (
    <Container>
       <Masonry 
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName='my-masonry-grid_column'
      >
        { cardstoprint.map((cardall) => (
       <div key={cardall.id}>
       <CardComponent cardall={cardall} />
     </div>
      ))}
        
        
       
      </Masonry>
       
    </Container>
  )
}
