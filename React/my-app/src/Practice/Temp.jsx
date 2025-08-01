import React, { useState } from 'react'

function Temp() {
    const[toDo, setTodo] = useState([])
    const[list,setList] = useState('')
    const handleSubmit = () =>{
        if(list == "") return
        setTodo([...toDo, list])
        setList('')
     }

     const handleDelete = (index) =>{
        toDo.splice(index,1)
        console.log(toDo)
        setTodo([...toDo])  
     }

  return (
    
    <div>
    <ul>
       <input type='text' onChange={(e)=>setList(e.target.value)}/>
       <button onClick={handleSubmit}>Add</button>

       { toDo.map((item, index) => <li key={index}>{item} <button onClick={() => handleDelete({index})}>Remove</button></li>)}
    </ul>
    </div>
  )
}

export default Temp
