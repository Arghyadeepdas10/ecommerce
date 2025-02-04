import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {

    const isloggedin = useSelector((state)=>state.auth.isloggedin);

  return isloggedin ? <Outlet/> : <Navigate to = "/login"/>

}

export default PrivateRouter