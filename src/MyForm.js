import React, { useState } from 'react';

function MyForm() {
  let [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const getData = (e) => {
    console.warn(e.target.value);
    setName(e.target.value);
  }

  return (
    <div>
      <h1>How to get Form value</h1>
      {
        show ? <h3>{name}</h3> : ""
      }
      {/* <h3>{name}</h3> */}
      <label>Name </label>
      <input type="text" onChange={getData} />
      <button onClick={() => setShow(true)}>Show Data</button>
    </div>
  )
}

export default MyForm;
