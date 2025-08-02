import React, { useState } from 'react'

function CounterApp() {
    const [count,setCounter] = useState(0)
    const handledecement =()=>{
        if(count>0)
        {
            setCounter(count-1)
        }
    }
  return (
    <div>
      <h2>{count}</h2>
        <button onClick={()=>setCounter(count+1)}>Increment</button>
        <button onClick={handledecement}>Decerement by function</button>
        <button onClick={()=>count>0 ? setCounter(count-1) : setCounter(0)}>Decerement</button>
        <button onClick={()=>setCounter(0)}>Reset</button>
    </div>
  )
}

export default CounterApp
