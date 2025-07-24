import './App.css';
import { useState } from 'react';

function App() {

  const[counter,setCounter]= useState(0);

  function increase()
  {
    setCounter(counter+1)
  }

  function decrease()
  {
    setCounter(counter-1)
  }

  function zero()
  {
    setCounter(0)
  }
  

  return (
    <div >
      <h3>Counter: {counter}</h3>

      <button onClick={increase}>Increase Value</button>
      <button onClick={decrease}>Decrease Value</button>
      <button onClick={zero}>Zero Value</button>
    </div>
  );
}

export default App;
