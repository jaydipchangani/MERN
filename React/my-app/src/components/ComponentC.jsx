import {React, useContext} from 'react'
import { UserContext } from './UseContextExample';
import { ThemeContext } from './ComponentA';

const ComponentC = () => {
    const user = useContext(UserContext); // Consuming context

    const myTheme=useContext(ThemeContext)

  return (
    <div style={{background: myTheme.theme ? "#123465" : "#654321"}}>
      Hello, {user.name}!<p></p>
      {myTheme.theme}
      <button onClick={()=>myTheme.setTheme(!myTheme.theme)}> {myTheme.theme ? "Light" : "Dark"}</button>
    </div>
  )
}

export default ComponentC
