import { useEffect, useRef, useState } from "react";

function TwFive()
{
        const inputRef = useRef();
        
        function handleFocus () {
            inputRef.current.focus()
        }

        const[count,setCounter]= useState(0)
        const prevCount = useRef()

        useEffect(()=>{
            prevCount.current=count
        },[count])


    return (
        <>
            <div>
                <input type="text" ref={inputRef} placeholder="Type Your Name....."/>
                <button onClick={handleFocus}>Focus input</button>
            </div>

            <div> 
                <h3>Previous Count: {prevCount.current}</h3>
                <h3>Current Count: {count}</h3>
                <button onClick={()=>setCounter(count+1)}>Increase</button>
            </div>
        </>
    )
}

export default TwFive;