import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Ensure this path is correct

const AuthorizedRoute = ({ children, allowedRoles }) => {
  const { user, isLoading } = useAuth();
  
  // 1. Handle the loading state so 'user' isn't undefined initially
  if (isLoading) {
    return <div>Loading...</div>; 
  }

  // 2. Check if user exists and has the correct role
  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default AuthorizedRoute;