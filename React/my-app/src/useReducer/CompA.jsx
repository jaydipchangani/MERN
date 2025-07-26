import React, {  useContext } from 'react'
import { CounterContext } from './App'

export default function CompA() {
    const useCon = useContext(CounterContext)
  return (
    <div>
      CompA 
      <button onClick={()=> useCon.dispatch({type:"inc"})}>INCREMENT</button>
      
      <button onClick={()=> useCon.dispatch({type:"dec"})}>DECREMENT</button>
      
      <button onClick={()=> useCon.dispatch({type:"reset"})}>RESET</button>
    </div>
  ) 
}
