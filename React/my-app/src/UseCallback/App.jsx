import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent'
const App = () => {
    const [count,setCount] = useState(0)
    
    const handleClick = useCallback(() =>{
        setCount(count+1)
    })

    return (
    <div>
        Count : {count}<br/>
        <button onClick={handleClick}>Increase</button> 
        <br/>
        <ChildComponent handleClick={handleClick} name="Click Me"/>
        
    </div>
  )
}

export default App
