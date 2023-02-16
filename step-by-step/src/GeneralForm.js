import React, { useState } from 'react';

function GeneralForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [option, setOption] = useState("");
  const [checked, setChecked] = useState(false);
  const [isNotValid, setIsNotValid] = useState(false);

  const clearForm = () => {
    setName("");
    setEmail("");
    setOption("");
    setChecked(false);
    console.error("Form submitted successfully");
  }

  const submitForm = e => {
    e.preventDefault();
    clearForm();
    console.log("Form submitted with:", { email, name, option, checked });
  }

  function emailHandle(e) {
    let email = e.target.value;
    setEmail(email);
    const emailRegexp = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,20}$/;
    setIsNotValid(!emailRegexp.test(email));
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="text" placeholder="Enter Email" value={email} onChange={emailHandle} />
        {isNotValid && <><br /><span style={{ fontSize: "14px", color: "red" }}>This is wrong email type</span></>}
        <br /><br />
        <input type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
        <br /><br />
        <select value={option} onChange={e => setOption(e.target.value)}>
          <option>Select Option</option>
          <option>DC</option>
          <option>MARVEL</option>
        </select>
        <br /><br />
        <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />
        <span>Please check all Terms & Condition</span>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default GeneralForm;
