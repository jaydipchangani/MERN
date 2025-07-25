import React, { createContext, useState } from 'react'
import ComponentB from './ComponentB'

const ThemeContext = createContext()

export default function ComponentA() {
  const[theme,setTheme]=useState(true)

  return (
    <div>
    <ThemeContext.Provider value={{theme,setTheme}}>
        <ComponentB />
    </ThemeContext.Provider>
      
      
    </div>
  )
}

export {ThemeContext}