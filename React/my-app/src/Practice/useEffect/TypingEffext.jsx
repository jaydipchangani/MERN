import React, { useEffect, useState } from "react";

function TypingEffext({text, speed} ) {
  const [displayText, setDisplayText] = useState("");

useEffect(() => {
  let index = 0;

  const interval = setInterval(() => {
    if (index < text.length-1) {
      setDisplayText((prev) => prev + text[index]);
      
      index++;
      console.log(text[index])
    } else {
      clearInterval(interval);
    }
  }, speed);

  return () => clearInterval(interval);
}, [text, speed]);
  
  return <div>{displayText}</div>;
}

export default TypingEffext;
