import React, { startTransition, useContext, useState } from "react";
import { CommonContext } from "./CommonContext";
import RightSuperChild from "./RightSuperChild";

export default function RightChild() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { rightChildColor } = useContext(CommonContext);

  function updateData() {
    setPhone("7589641230");
    startTransition(() => {
      setEmail("sayan@gmail.com");
      startTransition(() => {
        setName("sayan");
      });
    });
  }

  console.log("RightChild.js rendered", { name, email, phone });
  return (
    <div>
      <h1 style={{ color: rightChildColor }}>RightChild Component</h1>
      {`{name: ${name}, email: ${email}, phone: ${phone}}`}
      <button onClick={updateData}>Update Data</button>
      <RightSuperChild />
    </div>
  );
}
