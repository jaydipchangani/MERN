import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return <h2>Timer: {seconds} sec</h2>;
}

export default Timer;
