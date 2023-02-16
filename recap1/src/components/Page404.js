import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Page404() {
  const params = useParams();
  const navigate = useNavigate();
  const currentPath = params['*'];

  return (
    <div>
      <h1>404 Not Found</h1>
      <p style={{ fontSize: "20px", color: "red", fontWeight: "600" }}>
        No page found at this '/{currentPath}' path
      </p>
      <button style={{ margin: "12px 0px" }} onClick={() => navigate('/')}>GoTo Home</button>
    </div>
  );
}
