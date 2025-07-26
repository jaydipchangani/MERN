import React from 'react'
import useFetch from './useFetch'

export default function App() {
    const{data : users} = useFetch('https://jsonplaceholder.typicode.com/users')
    const {data: todo} =useFetch('https://jsonplaceholder.typicode.com/todos')
  return (
    <>
     <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>

    <div>
      <h2>To Do List</h2>
      <ul>
        {todo.map(u => (
          <li key={u.id}>{u.title} ({u.completed})</li>
        ))}
      </ul>
    </div>
  </>
  )
}
