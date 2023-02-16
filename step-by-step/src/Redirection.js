import React from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";

function InnerNavbar() {
  return (
    <nav>
      <h1>Navbar</h1>
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

const Redirection = () => {
  return (
    <>
      <BrowserRouter>
        <InnerNavbar />
        <Routes>
          <Route path='/' element={<h1>This is the Landing Page</h1>} />
          <Route path="/home" element={<h1>This is home page</h1>} />
          <Route path="/about" element={<h1>This is about page</h1>} />
          <Route path="/login" element={<Navigate to={'/'} />} />
          <Route path="/*" element={
            <>
              <h1>404 Not Found</h1>
              <p>This page doesn't exist <Link to={'/'}>Go Back</Link></p>
            </>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Redirection;
