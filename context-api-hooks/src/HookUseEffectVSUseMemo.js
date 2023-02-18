import React, { useEffect, useMemo, useState } from "react";

export default function UseEffectVSUseMemo() {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(10);

  useEffect(() => {
    console.warn("useEffect called only once");
  }, []);

  useEffect(() => {
    console.warn("useEffect called only on data");
  }, [data]);

  useEffect(() => {
    console.warn("useEffect called only on count");
  }, [count]);

  const NoDuplicateRendering = useMemo(() => {
    return (
      <h1 style={{ color: "lightblue" }}>Rendered for 1 time count: {count}</h1>
    );
  }, []);

  const RenderingForCount = useMemo(() => {
    return (
      <h1 style={{ color: "red" }}>Rendering again and again count: {count}</h1>
    );
  }, [count]);

  return (
    <div>
      <h1>useEffect vs useMemo</h1>
      <div className="">
        <h1>useEffect</h1>
        <h1>{data}</h1>
        <h1>{count}</h1>
        <button onClick={() => setData(data + 1)}>Update Data</button>
        <button onClick={() => setCount(count + 1)}>Update Count</button>
      </div>
      <div className="">
        <h1>useMemo</h1>
        {NoDuplicateRendering}
        {RenderingForCount}
        <button onClick={() => setCount(count + 1)}>Update Count</button>
      </div>
    </div>
  );
}
