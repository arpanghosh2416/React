import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const logoutStyle = {
    color: "white",
    border: "none",
    cursor: "pointer",
    padding: "2px 6px",
    borderRadius: "2px",
    backgroundColor: "red"
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink className="navbar-link" to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to={"/login"}>Login</NavLink>
        </li>
        <li>
          <button onClick={() => window.localStorage.removeItem("login")} style={logoutStyle}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
