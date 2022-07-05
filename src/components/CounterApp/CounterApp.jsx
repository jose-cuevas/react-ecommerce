// import React from 'react'
import { useState } from "react";

function CounterApp({ value = 0 }) {
  const [count, setCount] = useState(value);

  const counterAdd = () => {
    return setCount(count + 1);
  };

  const counterRest = () => {
    return setCount(count - 1);
  };

  const counterReset = () => {
    return setCount(value=0);
  };

  return (
  <>
  <button onClick={counterAdd}>Add</button>
  <button onClick={counterRest}>Rest</button>
  <button onClick={counterReset}>Reset</button>

  <div>{count}</div>
  </>
  )
}

export default CounterApp;
