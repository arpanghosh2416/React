import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Users from './Users';

function DynamicRoute() {
  return (
    <>
      <h1>Welcome u to Dynamic Route</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to={"/users/anil"}>Anil Sidhu</Link>
          </li>
          <li>
            <Link to={"/users/peter"}>Peter Parker</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={null} />
          <Route path="/users/:name" element={<Users />} />
          <Route path="/*" element={
            <>
              <h1>404 Not Found</h1>
              <p>This page doesn't exist</p>
              <p><Link to={'/'}>Go back to home</Link></p>
            </>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default DynamicRoute;
