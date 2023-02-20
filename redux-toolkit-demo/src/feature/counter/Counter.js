import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Counter.css";
import {
  increment,
  decrement,
  incrementByAmount
} from "./counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState('0');
  const { color } = useSelector(state => state.theme);
  const { count } = useSelector(state => state.counter);
  // const count = useSelector(state => state.counter.count);
  console.log("Counter.js: count:", count);

  return (
    <div className="" style={{ color: color }}>
      <div className="counter">
        <button onClick={() => dispatch(decrement())}> - </button>
        <span>Count: {count}</span>
        <button onClick={() => dispatch(increment())}> + </button>
      </div>
      <div className="">
        <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
        <button onClick={
          () => {
            dispatch(incrementByAmount(number));
          }
        }>Add</button>
      </div>
    </div>
  );
}

export default Counter;
