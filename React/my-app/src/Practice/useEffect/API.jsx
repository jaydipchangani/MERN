import React, { useEffect, useState } from 'react'

function API() {
    const [user,setUser] = useState([])

    useEffect(()=>{
        fetch('https://fake.jsonmockapi.com/products?length=10')
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err => console.log(err))
},[])
  return (
    <div>
      <ul>
        {
            user.map(u => (<li key={u.sku}>{u.productName} - ${u.price}</li>))
        }
      </ul>
    </div>
  )
}

export default API
