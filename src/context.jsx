import { useContext, useReducer, useEffect, createContext } from 'react';

const appContext = createContext();

export const AppProvider = ({ children }) => {
  const greeting = 'hello';
  return <appContext.Provider value={{ greeting }}>{children}</appContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(appContext);
};
