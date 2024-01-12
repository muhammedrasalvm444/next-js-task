import { createContext, useContext, useState } from "react";
import { login as apiLogin } from "../api/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const isBrowser = typeof window !== "undefined";
  const [loading, setLoading] = useState(false);
  const [loginCompleted, setLoginCompleted] = useState(false);
  const router = useRouter();

  const [token, setToken] = useState(
    isBrowser ? localStorage.getItem("token") || null : null
  );
  const login = async (data) => {
    try {
      setLoading(true);
      const getToeken = await apiLogin(data);
      localStorage.setItem("token", getToeken?.data?.token?.access);
      setToken(getToeken?.data?.token?.access);
      setLoading(false);
      setLoginCompleted(true);
    } catch (error) {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    toast.success("Logged out successfull");
    router.push("/login");
    setLoginCompleted(false);
  };

  return (
    <AuthContext.Provider
      value={{ token, login, logout, loading, loginCompleted }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider };
