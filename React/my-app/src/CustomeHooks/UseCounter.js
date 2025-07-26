import React, { useState } from 'react'

export default function useCounter(init) {

    const[count,setCounter] =useState(init)

    function increase(){
        setCounter (count+1)
    }
    function decrease(){
        setCounter (count-1)
    }
    function reset(){
        setCounter(0)
    }

   return { count, increase, decrease, reset };
}
