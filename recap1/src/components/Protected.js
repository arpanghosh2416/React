import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Protected(props) {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = window.localStorage.getItem("login");
    const isLoggedIn = (loggedIn === "true") ? true : false;
    if (!isLoggedIn) navigate("/login");
  });

  return props.component;
}
