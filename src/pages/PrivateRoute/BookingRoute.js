import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, adminOnly = false }) {
  const user = JSON.parse(localStorage.getItem('user')); // user object from login
  if(!user) return <Navigate to="/signin" />;

  if(adminOnly && user.role !== 'admin') return <Navigate to="/" />;

  return children;
}
