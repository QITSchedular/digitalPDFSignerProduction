import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [contextState, setContextState] = useState({
    inputSignatureText: "",
    isLoading: false,
    // Add more fields as needed
  });

  const updateContextState = (updatedState) => {
    setContextState((prevState) => ({
      ...prevState,
      ...updatedState,
    }));
  };

  return (
    <AppContext.Provider value={{ contextState, updateContextState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
