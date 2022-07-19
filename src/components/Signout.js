import React, { useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const Signout = () => {
  const { signout, curUser, token } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const logout = async () => {
      const tasksFromServer = await signout(token);
      console.log("User Logged out successfully");
      navigate("/login");
    };
    logout();
  }, []);

  return <div>User Loggedout Successfully</div>;
};

export default Signout;
