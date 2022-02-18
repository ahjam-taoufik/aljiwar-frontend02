import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './../pages/Home';
import Dashboard from './../pages/Dashboard';
import Profile from './../pages/Profile';
import Loginpage from './../pages/Loginpage';
import RegisterPage from './../pages/RegisterPage';

 const RouteApp = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/admin" element={<Dashboard />}></Route>
    <Route path="/profile" element={<Profile />}></Route>
    <Route path="/login" element={<Loginpage />}></Route>
    <Route path="/register" element={<RegisterPage />}></Route>
    </Routes>
  )
}
export default RouteApp