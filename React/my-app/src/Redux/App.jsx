import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmomunt, reset } from '../features/counter/counterSlice'

function App() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(0)
    function handleIncerment(){
        dispatch(increment())
    }   

    function handleDecerment(){
        dispatch(decrement())
    }

    function handleRest(){
        dispatch(reset())
    }
    function handleIncrementByAmomunt(){
        dispatch(incrementByAmomunt(amount))
    }
  return (
    <div>
      <button onClick={handleIncerment} > + </button>
      <br/>
      <p>Count : {count} </p>
      
      <button onClick={handleDecerment} > - </button>
      <br/>
      <button onClick={handleRest} > Reset </button>
      <br/><br/>
      <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}/>
      <br/>
      <button onClick={handleIncrementByAmomunt} > Increment By Amount </button>
    </div>
  )
}

export default App
