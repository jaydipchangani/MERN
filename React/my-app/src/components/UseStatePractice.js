import { useState } from "react";

function UseStatePractice()
{
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
    )
}

export default UseStatePractice;