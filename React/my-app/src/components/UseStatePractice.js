import { useEffect, useState } from "react";

function UseStatePractice()
{
    /*
    const[form,setForm]= useState({
        name:'',
        email:''
    })
    

    function handleChange(e){
        const {name, value} =e.target;
        setForm(prev =>({
            ...prev,
            [name]:value
        }))
    
    }

    function handlSubmit(e)
    {
        e.preventDefault();
        console.log(form)
    }

     return(
        <>
    <h3>Form</h3>

            <form onSubmit={handlSubmit}>
                <input type="text" name="name"placeholder="Enter Name" value={form.name} onChange={handleChange}/>
                
                <input type="email" name="email"placeholder="Enter Email" value={form.email} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>

            <h3>{form.name}</h3>
            <h3>{form.email}</h3>

            </>
*/

    const[query, setQuery] = useState("")
    const[users,setUsers] =useState([])

    useEffect(()=>{
         if (!query.trim()) {
    setUsers([]);
    return; 
  }

        fetch(`https://api.github.com/search/users?q=${query}`)
        .then(res=>res.json())
        .then(data => {setUsers(data.items);})
        .catch(err => console.log(err))
    },[query])

    return(
        <>
            <form>
                <input type="text" value={query}    onChange={(e)=>setQuery(e.target.value)}/>
            </form>

            <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginTop: "10px" }}>
            <img src={user.avatar_url} alt="avatar" width="30" />
            &nbsp;
            <a href={user.html_url} target="_blank" rel="noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
        </>
    )
}

export default UseStatePractice;