import React, { useRef, useState } from 'react'
import ComponentC from './ComponentC'

const ComponentB = () => {
    const [time,setTime]= useState(0)
    let timeRef = useRef(null)

    function startStopWatch(){
        timeRef.current=setInterval(()=>{
            setTime(time=>time+1)
        },1000)
    }

    function stopStopWatch(){
        clearInterval(timeRef.current)
        timeRef.current=null
    }

    function resetStopWatch(){
        stopStopWatch()
        setTime(0)
    }
  return (
    <div>
      <ComponentC />
      <h3>StopWatch {time} Seconds</h3>
      
      <button onClick={startStopWatch}>Start</button>
      <br/>
      <button onClick={stopStopWatch}>Stop</button>
      <br/>
      <button onClick={resetStopWatch}>Reset</button>
      
    </div>
  )
}

export default ComponentB
