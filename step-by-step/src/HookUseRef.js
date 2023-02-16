import React, { useRef } from 'react';
import HookUseForwardRef from './HookUseForwardRef';

// function HookUseRef() {
//   let inputRef = useRef(null);

//   function clicked(e) {
//     console.warn("This is clicked", e);
//     inputRef.current.style.color = "red";
//   }

//   return (
//     <div>
//       <h1>useRef Example</h1>
//       <input type="text" ref={inputRef} />
//       <button onClick={clicked}>Action</button>
//     </div>
//   )
// }

function HookUseRef() {
  let inputRef = useRef(null);

  function clicked(e) {
    inputRef.current.focus();
    inputRef.current.value = 1000;
    inputRef.current.style.color = "red";
  }

  return (
    <div>
      <h1>useRef with forwardRef Example</h1>
      <HookUseForwardRef ref={inputRef} />
      <button onClick={clicked}>Action</button>
    </div>
  )
}

export default HookUseRef;
