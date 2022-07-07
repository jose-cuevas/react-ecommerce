// import React from 'react'
import { useState } from "react";

import './counterApp.css';

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
  {/* <Button variant="secondary"  onClick={counterAdd}>Add</Button>{' '} */}
  <button type="button" className="btn btn-secondary btn-sm counter-button" onClick={counterAdd}>Add</button>
  <button type="button" className="btn btn-secondary btn-sm counter-button" onClick={counterRest}>Rest</button>
  <button type="button" className="btn btn-danger btn-sm counter-button" onClick={counterReset}>Reset</button>
  <div>{count}</div>
  </>
  )
}

export default CounterApp;
