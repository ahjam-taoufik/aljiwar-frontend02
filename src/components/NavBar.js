import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
   
      <Link  to="/">home</Link> {" "}
      <Link to="/admin">admin</Link>{" "}
      <Link to="/admin/profileDashboard">adminprofile</Link>

    </>
  )
}

export default NavBar