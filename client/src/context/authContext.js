import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    //TO DO
    const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data);
  };

  const logoutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");

    performLogout();
  };

  const performLogout = async () => {
    try {
      await axios.post("http://localhost:8800/api/auth/logout", null, {
        withCredentials: true,
      });

      localStorage.removeItem("token");

      document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.location.href = "/login";
    } catch (error) {
      console.log("Error occured during logout: ", error);
    }
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};