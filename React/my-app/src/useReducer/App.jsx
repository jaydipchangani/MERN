import React, { createContext, useContext, useReducer } from 'react'
import CompA from './CompA'
import CompC from './CompC'

export const CounterContext = createContext()
function reducer (state,action){
    if(action.type === 'inc')
        {
            return state+1;
        }
        if(action.type === 'dec')
        {
            return state-1;
        }
        if(action.type === 'reset')
        {   
            state=0
            return state;
        }
}

const App = () => {
    const[count, dispatch] = useReducer(reducer, 0)
  return (
    <CounterContext.Provider value={ {count,dispatch}}>
        <div>
        Counter: {count}
            <CompA/>
            <CompC/>
        </div>
    </CounterContext.Provider>
  )
}

export default App
