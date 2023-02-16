import { useEffect, useState } from "react";

export default function HookUseEffect() {
  let [data, setData] = useState(10);
  let [count, setCount] = useState(100);

  useEffect(() => {
    console.warn("This is useEffect only for count");
  }, [count]);

  return (
    <>
      <h1>Example of useEffect</h1>
      <h3>Data: {data}</h3>
      <h3>Count: {count}</h3>
      <button onClick={() => setData(data + 1)}>Up Data</button>
      <button onClick={() => setCount(count + 1)}>Up Count</button>
    </>
  );
}
