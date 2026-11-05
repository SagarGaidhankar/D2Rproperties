
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("nidhi_admin_auth") === "true"
  );

  // Mock authentication for frontend development
  const login = (email, password) => {
    if (
      email === "admin@nidhi.in" &&
      password === "Admin@123"
    ) {
      localStorage.setItem("nidhi_admin_auth", "true");
      setIsAuthenticated(true);
      return { success: true };
    }

    return {
      success: false,
      message: "Invalid email or password",
    };
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("nidhi_admin_auth");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};
