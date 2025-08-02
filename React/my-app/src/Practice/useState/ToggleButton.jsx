import React, { useState } from 'react'

function ToggleButton() {
  const [isToggled, setToggle] = useState(false)
    const handleToggle = () =>{
        setToggle(!isToggled)
    }
    return (
    <div>
      {isToggled === false ? <button onClick={handleToggle}>Show</button>   : <button onClick={handleToggle}>Hide</button>}

        <p style={ {display : isToggled === false ? 'none' : 'inline'}}>Hello there</p>
      
      {isToggled && <p>Using &&</p>}
    </div>
  )
}

export default ToggleButton
