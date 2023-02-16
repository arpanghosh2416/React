import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Welcome to React Router's landing page: v6.8.2</h1>} />
        <Route path="/red" element={<h1 style={{ color: "red" }}>This is Red route</h1>} />
        <Route path="/blue" element={<h1 style={{ color: "blue" }}>This is Blue route</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
