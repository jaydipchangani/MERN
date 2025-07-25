import React, { createContext } from 'react'
import ComponentA from './ComponentA'

// 1: creating context
const UserContext = createContext();

export default function UseContextExample() {

    const [user,setUser] = React.useState({
        name: "John Doe"})

  return (
    <div>
    {// 2: providing context
    //3:pass value to the provider
    //4: consuming context in child components
    }
    <UserContext.Provider value={user}>
      <ComponentA/>
      </UserContext.Provider>
      
    </div>
  )
}

export { UserContext }; // Exporting the context for use in child components