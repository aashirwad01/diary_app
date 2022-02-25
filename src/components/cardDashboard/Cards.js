import React from 'react'
import CardComponent from './CardComponent'
import Masonry from 'react-masonry-css'
import { Box, Container } from '@mui/material'
import { useSelector } from 'react-redux'


const breakpoints={
  default:3,
  1100:2,
  700:1

}

{/* <div>
          <CardComponent/>
        </div> */}

export default function Cards({cardsall}) {
  const tabselected=useSelector(state=>state.filtertab.data)
  
  if(tabselected !=='all'){
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
