import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="px-6 py-4 bg-slate-400">
        <ul className="flex items-center gap-2">
          <li className="">
            <NavLink className="px-6 py-2 rounded text-black hover:text-white hover:bg-slate-600" to={"/home"}>Home</NavLink>
          </li>
          <li className="">
            <NavLink className="px-6 py-2 rounded text-black hover:text-white hover:bg-slate-600" to={"/toolkit-demo"}>Toolkit-Demo</NavLink>
          </li>
          <li className="">
            <NavLink className="px-6 py-2 rounded text-black hover:text-white hover:bg-slate-600" to={"/rtk-query"}>RTK-Query</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
