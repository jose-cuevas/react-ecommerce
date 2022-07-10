// import React from 'react'
import { useState } from "react";

import './counterApp.css';

function CounterApp( {setCount, count} ) {
  // const [count, setCount] = useState(1);
  // console.log(count)
  // console.log(itemBuyed)

  const counterAdd = () => {
    return setCount(count + 1);
  };

  const counterRest = () => {
    if (count === 1) return
    return setCount(count - 1);
  };

  const counterReset = () => {    
    return setCount(1);
  };

  return (
  <>
  <div>Amount: {count}</div>
  {/* <button type="button" className="btn btn-secondary btn-sm counter-button" onClick={counterAdd}>Add</button> */}
  {/* <button type="button" className="btn btn-secondary btn-sm counter-button" onClick={counterRest}>Rest</button>
  <button type="button" className="btn btn-danger btn-sm counter-button" onClick={counterReset}>Reset</button> */}


  <button type="button" className="btn btn-secondary btn-sm counter-button" onClick={() => counterAdd()}>Add</button>
  <button type="button" className="btn btn-secondary btn-sm counter-button" onClick={() => counterRest()}>Rest</button>
  <button type="button" className="btn btn-danger btn-sm counter-button" onClick={() => counterReset()}>Reset</button>
  
  </>
  )
}

export default CounterApp;
