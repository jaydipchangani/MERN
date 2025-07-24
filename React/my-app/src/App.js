import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [user,setUser] = useState([])
  
  /*
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json() )
    .then(data=> {setUser(data); console.log(data);} )
    .catch(err=> console.log(err))
  },[])
  */

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res=>setUser(res.data))
    .catch(err=> console.log(err))
  },[])

  return (
    <div >
      <h3>User Data</h3>
    {user.map(u => <li key={u.id}>{u.title}</li>)}
    </div>
  );
}

export default App;
