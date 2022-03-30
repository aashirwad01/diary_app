import { Link } from '@mui/material'
import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncActionError, asyncActionFinish, asyncActionStart } from '../components/async/asyncReducer'
import CardPlaceholder from '../components/asynComponents/CardPlaceholder'
import LoadingComponent from '../components/asynComponents/LoadingComponent'
import { listenToCards } from '../components/cardDashboard/cardActions'
import Cards from '../components/cardDashboard/Cards'
import SideBar from '../components/cardDashboard/SideBar'
import { dataFromSnapshot, getEventsFromFirestore, listenToCardsFromFirestore } from '../components/firestore/firestoreService'
import useFirestoreCollection from '../components/hooks/useFirestoreCollection'


export default function DashBoard() {

  const dispatch = useDispatch()

  const {cardsall}=useSelector(state =>state.card);
  const { loading , error } = useSelector(state => state.async)
 

  // useEffect(()=>{
  //   dispatch(asyncActionStart())
    
  //   const unsubscribe  = getEventsFromFirestore({
  //     next: snapshot => {
  //       dispatch(listenToCards(snapshot.docs.map(docSnapshot => dataFromSnapshot(docSnapshot) )));
  //       dispatch(asyncActionFinish())


  //     },
       
  //     error: error => dispatch(asyncActionError(error)),
  //     complete:()=> console.log('message')
  //   })
  //   return unsubscribe
  // },[dispatch])

  useFirestoreCollection({
    query: ()=> listenToCardsFromFirestore(),
    data: cardsall => dispatch(listenToCards(cardsall)),
    deps:[dispatch],
   
    
  })

{/* <LoadingComponent/> */}


  if (loading || (!cardsall && !error)) return <div>
    <LoadingComponent/>
     <CardPlaceholder/>
  </div>

  // if(error) return <Link href ="/error" >

  
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
