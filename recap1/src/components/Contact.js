import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
      <h1>This is Contact page</h1>
      <ul>
        <li>
          <Link style={{ textDecoration: "none" }} to={"twitter"}>Twitter</Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to={"yt"}>YouTube</Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to={"insta"}>Instagram</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
