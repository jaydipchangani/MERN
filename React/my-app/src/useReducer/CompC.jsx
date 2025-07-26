import React, {  useContext } from 'react'
import { CounterContext } from './App'

export default function CompC() {
    const useCon = useContext(CounterContext)
  return (
    <div>
      CompC
      <button onClick={()=> useCon.dispatch({type:"inc"})}>INCREMENT</button>
      
      <button onClick={()=> useCon.dispatch({type:"dec"})}>DECREMENT</button>
      
      <button onClick={()=> useCon.dispatch({type:"reset"})}>RESET</button>
    </div>
  ) 
}
