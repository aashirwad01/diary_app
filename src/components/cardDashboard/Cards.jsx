import React, { useEffect } from 'react'
import CardComponent from './CardComponent'
import Masonry from 'react-masonry-css'
import { Box, Container } from '@mui/material'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'
import { toast } from "react-toastify";
import NullUserCard from './NullUserCard'
import { useRef } from 'react'


const breakpoints={
  default:3,
  1100:2,
  700:1

}




export default function Cards({cardsall,user}) {
  const { authenticated } = useSelector((state) => state.auth);
  const tabselected=useSelector(state=>state.filtertab.data)
  const dateselected = useSelector(state => { if(tabselected==='date') {
    
    return state.filtertab.todate
}
return null
})

// cardsall.map((cardall) => {
//   console.log(cardall.cardOwner)

// })
console.log(cardsall)
var cardsFilteredbyOwner = useRef(cardsall.filter(cardall => cardall.cardOwner === user))
console.log(cardsFilteredbyOwner.current)


useEffect(() => {
  
  
  cardsFilteredbyOwner.current = cardsall.filter(cardall => cardall.cardOwner === user)
  console.log(cardsFilteredbyOwner.current)

}, [authenticated])

console.log(cardsFilteredbyOwner.current)

  
console.log(user)
  
  
  console.log(authenticated)




var finalCardstoPrint=cardsFilteredbyOwner.current
    

if(cardsFilteredbyOwner.current){
  if(tabselected ==='date'){
    
    if(isNaN(dateselected)){
      console.log('kk')
      toast.error('Invalid Date selected', {
        toastId:'invalid'
      })
      finalCardstoPrint=cardsFilteredbyOwner.current
    }
   
    if(!isNaN(dateselected)){
      
      
    var datesel= format(dateselected,'dd')
    var monthsel = format(dateselected,'MMMM')
    var yearsel=format(dateselected,'yyyy')
    
    console.log(cardsFilteredbyOwner.current.filter(evt => format(evt.todate,'MMMM dd, yyyy ') ===format(dateselected , 'MMMM dd, yyyy ')))
  
    finalCardstoPrint=cardsFilteredbyOwner.current.filter(evt => format(evt.todate,'MMMM dd, yyyy ') ===format(dateselected , 'MMMM dd, yyyy '))
    
    if(finalCardstoPrint.length){
      toast.success("Date matched showing All Entries" , {
        toastId:'success'
      })
    }
   else if(finalCardstoPrint.length===0){
      finalCardstoPrint=cardsFilteredbyOwner.current.filter(evt => format(evt.todate,'yyyy') ===yearsel)
  
      if(finalCardstoPrint.length){
        toast.info('Showing Entries where year Matched', {
          toastId:'year match'
        })
      }
      else if(finalCardstoPrint.length===0){
        finalCardstoPrint=cardsFilteredbyOwner.current.filter(evt => format(evt.todate,'MMMM') ===monthsel)
        if(finalCardstoPrint.length){
          toast.info('Showing Entries where month Matched' , {
            toastId:'month match'
          })
        }
  
        else if(finalCardstoPrint.length===0){
          finalCardstoPrint=cardsFilteredbyOwner.current.filter(evt => format(evt.todate,'dd') ===datesel)
          if(finalCardstoPrint.length){
            toast.info('Showing Entries where Date Matched'
            , {
              toastId:'date match'
            })
          }
          else if(finalCardstoPrint.length===0){
            finalCardstoPrint=cardsFilteredbyOwner.current
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
      finalCardstoPrint= cardsFilteredbyOwner.current.filter(evt => evt.category ===tabselected)
      
     
    }
    
    
  else{
      finalCardstoPrint=cardsFilteredbyOwner.current
    }
   

}

  return (
    <Container>
       <Masonry 
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName='my-masonry-grid_column'
      >
       { authenticated ? finalCardstoPrint.map((cardall) => (
       <div key={cardall.id}>
       <CardComponent cardall={cardall} />
     </div>
      )):<NullUserCard/>}
        
        
       
      </Masonry>
       
    </Container>
  )
}
