import React, { useState, useContext } from "react";

import { login, register, logout } from "../apis/UserApi";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [curUser, setCurUser] = useState();
  const [token, setToken] = useState();

  const [loading, setLoading] = useState(false);

  async function signin(email, password) {
    const res = await login(email, password);
    await setToken(res.token);
    await setCurUser(res.user);
    return res;
  }

  async function signup(email, password) {
    const res = await register(email, password);
    return res;
  }

  async function signout(token) {
    const res = await logout(token);
    await setCurUser();
    await setToken("");
    return res;
  }

  const value = {
    curUser,
    token,
    signin,
    signup,
    signout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
