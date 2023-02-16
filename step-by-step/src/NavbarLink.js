import React from 'react';
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import Page404 from './Page404';
import './NavbarLink.css'
import Route3 from './Route3';

function Nav() {
  return (
    <>
      <nav style={{ display: "flex", backgroundColor: "#222222", color: "white" }}>
        <ul>
          <li style={{ display: "inline", paddingRight: "20px" }}>
            <NavLink className="navbar-link" to={"/home"}>Home</NavLink>
          </li>
          <li style={{ display: "inline", paddingRight: "20px" }}>
            <NavLink className="navbar-link" to={"/about"}>About</NavLink>
          </li>
          <li style={{ display: "inline", }}>
            <NavLink className="navbar-link" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

function About() {
  const navigate = useNavigate();

  return (
    <>
      <h1>This is About Page</h1>
      <button onClick={() => navigate('/')}>Go To Landing Page</button>
      <button onClick={() => navigate("/home")}>Go To Home Page</button>
    </>
  );
}

function NavbarLink() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<h1>This is the landing page</h1>} />
          <Route path="/home" element={<h1>This is Home Page</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact/" element={<Route3 />}>
            <Route path="company" element={
              <>
                <h1>Welcome to Company Page of Contact</h1>
              </>
            } />
            <Route path="channel" element={
              <>
                <h1>Welcome to Channel Page of Contact</h1>
              </>
            } />
            <Route path="others" element={
              <>
                <h1>Welcome to Others Page of Contact</h1>
              </>
            } />
          </Route>
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default NavbarLink;
