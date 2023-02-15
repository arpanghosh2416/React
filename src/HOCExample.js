import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

function HOCRed(props) {
  return (
    <>
      {/* {props.cmp()} */}
      <div className="" style={{ backgroundColor: "red", color: "white", width: "50%", margin: "auto auto" }}>
        <props.cmp />
      </div>
    </>
  );
}

function HOCBlue(props) {
  return (
    <>
      {/* {props.cmp()} */}
      <div className="" style={{ backgroundColor: "blue", color: "white", width: "50%", margin: "auto auto" }}>
        <props.cmp />
      </div>
    </>
  );
}

function HOCExample() {
  return (
    <div>
      <h1>Small About HOC</h1>
      {/* {Counter()} */}
      {/* <Counter /> */}
      <HOCRed cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </div>
  )
}

export default HOCExample
