// PrivateRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // or use your AuthContext

  const location = useLocation();

  if (!token) {
    //  Unauthorized ➜ go to SignIn with redirect param
    return <Navigate to={`/signin?from=${location.pathname}`} replace />;
  }

  //  Authorized ➜ render requested page
  return children;
};

export default PrivateRoute;
