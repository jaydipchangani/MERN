import React, { useReducer, useState } from 'react'

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

    const[task,setTask]=useState("")
    const[taskList,setTaskList]=useState([])
    const handleAddTask =()=>
    {   if(task.trim() ==="") return
        setTaskList([...taskList,task])
        setTask('')
    }
    const handleDeleteTask =(i)=>
    {  setTaskList(prev => prev.filter((_, idx) => idx !== i));
    }

  return (
    <div>
      <h1>Example of UseReducer</h1>
      <h2>{count}</h2>
      <button onClick={()=> dispatch({type:"inc"})}>INCREMENT</button>
      
      <button onClick={()=> dispatch({type:"dec"})}>DECREMENT</button>
      
      <button onClick={()=> dispatch({type:"reset"})}>RESET</button>

      <h1>To Do Application</h1>
        <input type='text' onChange={(e)=>setTask(e.target.value)} placeholder='Add your Task'/>
        <button onClick={handleAddTask}>Add</button>
        <br/>
    <ul>
        {taskList.map((t,index) => (<li key={index}>{t} <button onClick={()=> handleDeleteTask(index)}>Remove</button></li>))}
    </ul>
    </div>
  )
}

export default useReducerCount