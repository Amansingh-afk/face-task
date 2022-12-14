import React from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log("isLoggedIn:", isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default RequireAuth;
