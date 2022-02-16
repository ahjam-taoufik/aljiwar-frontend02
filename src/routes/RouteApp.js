import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './../pages/Home';
import Dashboard from './../pages/Dashboard';
import ProfileDashboard from './../pages/ProfileDashboard';

 const RouteApp = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/admin" element={<Dashboard />}>
       <Route path="profileDashboard" element={<ProfileDashboard />}></Route>
    </Route>
    </Routes>
  )
}
export default RouteApp