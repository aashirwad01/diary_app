import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './testReducer';

export default function SandBox() {

  const data =useSelector(state=> state.test.data)
  const dispatch=useDispatch();
  return (
    <div>
      <h1>Testing</h1>
      <h3>Data is {data}</h3>
      <Button variant ='contained' onClick={()=>dispatch({
        type:INCREMENT_COUNTER
      })}>Increment</Button>
      <Button variant ='error' onClick={()=>dispatch({
        type:DECREMENT_COUNTER
      })}>Decrement</Button>
    </div>
  )
}
