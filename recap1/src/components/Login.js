import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = window.localStorage.getItem("login");
    const isLoggedIn = (loggedIn === "true") ? true : false;
    if (isLoggedIn) navigate('/');
  });

  const loginUser = () => {
    window.localStorage.setItem("login", true);
    navigate('/');
  }

  return (
    <div>
      <p style={{ fontSize: "20px" }}>
        <label>Fake Login: </label>
        <input type="text" placeholder="Enter fake username" />
        <button style={{ marginLeft: "6px" }} onClick={loginUser}>Easy Login</button>
      </p>
    </div>
  );
}
