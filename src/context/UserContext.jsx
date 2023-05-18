/*<-- ========== UserContext ========== -->*/
/*<-- Imports -->*/
import { createContext, useState } from "react";
import filesSample from "../services/samples/files-sample-v1";

/*<-- ========== CONTEXT ========== -->*/
export const UserContext = createContext(null);

/*<-- ========== PROVIDER ========== -->*/
export const UserContextProvider = ({ children }) => {
  /*<-- ========== STATES ========== -->*/
  const [isLoggedin, setIsLoggedin] = useState(true);
  const [userProfile, setUserProfile] = useState({
    first: "Daniel",
    last: "Barreto",
  });
  const [userFiles, setUserFiles] = useState(filesSample);

  /*<-- ========== FUNTIONS ========== -->*/
  /*<-- User Loggin -->*/
  const userLogin = () => {
    setIsLoggedin(true);
  };
  /*<-- User Register -->*/
  const userRegister = () => {
    setIsLoggedin(true);
  };
  /*<-- User Logout -->*/
  const userLogout = () => {
    setIsLoggedin(false);
  };

  /*<-- ========== EXPORT ========== -->*/
  const value = {
    isLoggedin,
    setIsLoggedin,
    userProfile,
    setUserProfile,
    userFiles,
    userLogin,
    userRegister,
    userLogout,
  };

  /*<-- ========== RETURN ========== -->*/
  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};
