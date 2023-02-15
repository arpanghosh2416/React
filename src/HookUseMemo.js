import { useMemo, useState } from "react";

export default function HookUseMemo() {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(2);

  // function dataFunction() {
  //   console.warn("It must has to be update with data only");
  // }

  const dataFunction = useMemo(() => {
    console.warn("It must has to be update with data only");
  }, [data]);

  return (
    <>
      <h1>useMemo Example</h1>
      <h2>Data: {data}</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => setData(data + 10)}>Update Data</button>
      <button onClick={() => setCount(count * count)}>Update Count</button>
    </>
  );
}
