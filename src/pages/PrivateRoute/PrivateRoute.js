// // PrivateRoute.jsx
// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';

// const PrivateRoute = ({ children }) => {
//   const token = localStorage.getItem('token'); // or use your AuthContext

//   const location = useLocation();

//   if (!token) {
//     //  Unauthorized ➜ go to SignIn with redirect param
//     return <Navigate to={`/signin?from=${location.pathname}`} replace />;
//   }

//   //  Authorized ➜ render requested page
//   return children;
// };

// export default PrivateRoute;


import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, adminOnly = false }) => {
  const token = localStorage.getItem('token'); // বা AuthContext ব্যবহার করতে পারো
  const user = JSON.parse(localStorage.getItem('user')); // user object, যেখানে role আছে
  const location = useLocation();

  if (!token) {
    // Unauthorized ➜ go to SignIn with redirect param
    return <Navigate to={`/signup/provider?from=${location.pathname}`} replace />;
  }

  if (adminOnly && user?.role !== 'admin') {
    // Non-admin trying to access admin page ➜ redirect home
    return <Navigate to="/" replace />;
  }

  // Authorized ➜ render requested page
  return children;
};

export default PrivateRoute;
