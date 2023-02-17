import React, { startTransition, useState } from 'react';
import { flushSync } from 'react-dom';

export default function About() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  console.log("About Component rendered:", { name, email, phone });

  return (
    <div>
      <h1>This is About page</h1>
      <hr />
      <div className="" style={{ fontSize: "20px", fontWeight: "700" }}>
        {`{name: ${name}, email: ${email}, phone: ${phone}}`}
      </div>
      <button onClick={
        () => {
          // setName("sayan");
          // setEmail("sayan@gmail.com");
          // setPhone("7596841203");

          // flushSync(() => {
          //   setName('sayan');
          // });
          // flushSync(() => {
          //   setEmail("sayan@gmail.com");
          // });
          // flushSync(() => {
          //   setPhone("7596841203");
          // });

          setEmail("sayan@gmail.com");
          startTransition(() => {
            setName('sayan');
            setPhone("7596841203");
          });
        }
      }>Update Data</button>
    </div>
  );
}
