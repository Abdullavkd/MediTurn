import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('user'); 
  const location = useLocation();

  if (!isAuthenticated) {
    // We pass 'openLogin' in the state so the Landing Page knows to show the popup
    return <Navigate to="/" state={{ from: location, openLogin: true }} replace />;
  }

  return children;
};

export default ProtectedRoute;