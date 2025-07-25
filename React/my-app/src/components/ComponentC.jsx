import {React, useContext, useRef} from 'react'
import { UserContext } from './UseContextExample';
import { ThemeContext } from './ComponentA';

const ComponentC = () => {
    const user = useContext(UserContext); // Consuming context

    const myTheme=useContext(ThemeContext)
    const btnColor =useRef()
    function changeColor(){
        btnColor.current.style.backgroundColor="Red"
        btnColor.current.style.width="200px"
    }

  return (
    <div style={{background: myTheme.theme ? "#123465" : "#654321"}}>
      Hello, {user.name}!<p></p>
      {myTheme.theme}
      <button onClick={()=>myTheme.setTheme(!myTheme.theme)}> {myTheme.theme ? "Light" : "Dark"}</button>
      
      <button ref={btnColor}>Look Here !!</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default ComponentC
