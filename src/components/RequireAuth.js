import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

const RequireAuth = ({ children }) => {
  const { curUser } = useAuth();
  console.log("I am checking current user" + curUser);
  return curUser ? children : <Navigate to="/login" />;
};

export default RequireAuth;
