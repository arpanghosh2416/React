import React, { useRef } from "react";

export default function HookUseRef() {
  let inputRef = useRef(null);

  return (
    <div>
      <h1>useRef in React</h1>
      <input type="text" ref={inputRef} />
      <button onClick={() => {
        inputRef.current.focus();
        inputRef.current.value = 1000;
        inputRef.current.style.color = "red";
        console.warn("input field can be manipulated");
        console.warn("This ref.current method returns HTML element", inputRef.current);
      }}>Update Field</button>
    </div>
  );
}
