import React, { useState } from 'react';

function Home() {
  const [data, setData] = useState({ username: 'sayan', password: 'sayan123', email: 'sayan@gmail.com' });

  return (
    <div>
      <h1>This is Home page</h1>
      <hr />
      <div className="" style={{ margin: "10px 0px" }}>
        <form style={{ display: "flex", gap: "10px", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <input type="text" value={data.username} onChange={e => setData({ ...data, username: e.target.value })} />
          <input type="password" value={data.password} onChange={e => setData({ ...data, password: e.target.value })} />
          <input type="email" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} />
          <button>Submit</button>
        </form>
      </div>
      <div className="" style={{ fontSize: "20px" }}>
        <b>{`{username: ${data.username}, password: ${data.password}, email: ${data.email}}`}</b>
      </div>
    </div>
  );
}

export default Home;
