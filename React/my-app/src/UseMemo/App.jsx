import { useState, useMemo } from "react";

export default function App() {
  const [number, setNumber] = useState(1);
  const [otherState, setOtherState] = useState(false);

  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]);

  return (
    <div>
      <h2>Factorial of {number} is: {factorial}</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={() => setOtherState(!otherState)}>
        Re-render (Other State)
      </button>
    </div>
  );
}
