import React from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const authed = localStorage.getItem("authed");
  console.log("isLoggedIn:", authed);

  return authed ? children : <Navigate to="/" replace />;
};

export default RequireAuth;
