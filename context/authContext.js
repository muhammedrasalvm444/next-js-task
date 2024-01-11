// Remove the "use client"; statement
// "use client";
import { createContext, useContext, useState } from "react";
import { login as apiLogin } from "../api/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const isBrowser = typeof window !== "undefined";
  const [loading, setLoading] = useState(false);

  const [token, setToken] = useState(
    isBrowser ? localStorage.getItem("token") || null : null
  );

  const login = async (username, password) => {
    try {
      setLoading(true);
      const token = await apiLogin(username, password);
      localStorage.setItem("token", token);
      setToken(token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Login failed:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider };