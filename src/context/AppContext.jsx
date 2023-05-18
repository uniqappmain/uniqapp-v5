/*<-- ========== AppContext ========== -->*/
/*<-- Imports -->*/
import { createContext, useState } from "react";

/*<-- ========== CONTEXT ========== -->*/
export const AppContext = createContext(null);

/*<-- ========== PROVIDER ========== -->*/
export const AppContextProvider = ({ children }) => {
  /*<-- ========== STATES ========== -->*/
  const [appLanguage, setAppLanguage] = useState("en");
  const [currentPage, setCurrentPage] = useState(null);

  /*<-- ========== EXPORT ========== -->*/
  const value = {
    appLanguage,
    setAppLanguage,
    currentPage,
    setCurrentPage,
  };

  /*<-- ========== RETURN ========== -->*/
  return <AppContext.Provider value={value}> {children} </AppContext.Provider>;
};
