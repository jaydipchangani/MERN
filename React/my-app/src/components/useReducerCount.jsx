import React, { useReducer } from 'react'

function useReducerCount() {
    const[count,dispatch]=useReducer(reducer,0);

    function reducer(state,action){
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

  return (
    <div>
      <h1>Example of UseReducer</h1>
      <h2>{count}</h2>
      <button onClick={()=> dispatch({type:"inc"})}>INCREMENT</button>
      
      <button onClick={()=> dispatch({type:"dec"})}>DECREMENT</button>
      
      <button onClick={()=> dispatch({type:"reset"})}>RESET</button>
    </div>
  )
}

export default useReducerCount