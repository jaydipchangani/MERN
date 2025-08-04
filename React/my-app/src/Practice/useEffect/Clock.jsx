import React, { useEffect, useState } from 'react'

function Clock() {
    const [sec,setSec] = useState(0)

    useEffect( ()=>{
        const interval = setInterval(()=>{
            setSec(prev => prev+1)
        },1000)

        return ()=>clearInterval(interval)
    },[])
  return (
    <div>
      <h1>Timer : {sec} seconds</h1>
    </div>
  )
}

export default Clock
