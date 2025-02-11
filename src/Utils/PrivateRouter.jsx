// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Navigate, Outlet } from 'react-router-dom';

// const PrivateRouter = () => {

//     const isloggedin = useSelector((state)=>state.auth.isloggedin);

//   return isloggedin ? <Outlet/> : <Navigate to = "/login"/>

// }

// export default PrivateRouter

import { RedirectToSignIn, useAuth } from '@clerk/clerk-react';
import { Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return <Outlet />;
};

export default PrivateRouter;
