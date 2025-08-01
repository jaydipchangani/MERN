import React, { useState } from 'react'

function Temp() {
    const [count,setCount] =useState(0)

    const handleIncrement =()=>{
        setCount(count+1)
    }
  return (
    
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => setCount(count-1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Temp
