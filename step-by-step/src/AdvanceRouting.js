import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Route1 from './Route1';
import Route2 from './Route2';

function InnerNavbar() {
  return (
    <nav>
      <h2>Navbar</h2>
      <ul>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
}

function AdvanceRouting() {
  return (
    <>
      <BrowserRouter>
        <InnerNavbar />
        <Routes>
          <Route path='/' element={<h1>This is landing page</h1>} />
          <Route path="/home" element={<Route1 />} />
          <Route path="/about" element={<Route2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AdvanceRouting;
