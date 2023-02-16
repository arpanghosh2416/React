import React from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

function Page404() {
  const params = useParams();
  const path = params['*'];
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.get("name"));
  console.log(searchParams.get("kala"));

  return (
    <>
      <h1>404 Not Found</h1>
      <p>This page ('/{path}') doesn't exist <Link style={{ textDecoration: "none" }} to={'/'}>Go Back</Link></p>
      <button onClick={() => setSearchParams({ kala: "Rajani Kant" })}>Set new params in url</button>
    </>
  );
}

export default Page404;
