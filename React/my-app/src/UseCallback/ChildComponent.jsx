import React from 'react'
const ChildComponent =React.memo(
    (props)=>{
  
  console.log("Child Component Rerender")
    return (
    <div>
      <button onClick={props.handleClick}>{props.name}</button>
    </div>
  )
}) 

export default ChildComponent
