import React from "react";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Signin from "../components/Signin";
import Tasks from "../components/Tasks/Tasks";
import Signup from "../components/Signup";
import Signout from "../components/Signout";

const RoutersInfo = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <RequireAuth>
            <Tasks />
          </RequireAuth>
        }
      />
      <Route
        path="/logout"
        element={
          <RequireAuth>
            <Signout />
          </RequireAuth>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Signin />} />
    </Routes>
  );
};

export default RoutersInfo;
