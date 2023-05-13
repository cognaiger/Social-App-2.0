import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { makeRequest } from "../axios";

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
 
  const updateCurrentUser = async () => {
    try {
      console.log("current user" + currentUser);
      const res = await makeRequest.get(`/users/find/${currentUser.id}`);
      setCurrentUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    setCurrentUser(null);
  }



  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, updateCurrentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};