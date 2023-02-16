import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Route3() {
  return (
    <div>
      <h1>This is Contact Page</h1>
      <Link style={{ paddingRight: "20px" }} to={"company"}>Company</Link>
      <Link style={{ paddingRight: "20px" }} to={"channel"}>Channel</Link>
      <Link to={"others"}>Others</Link>
      <Outlet />
    </div>
  )
}

export default Route3
