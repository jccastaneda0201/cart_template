import { useContext, useReducer, useEffect, createContext } from 'react';
import reducer from './reducer';
import cartItems from './cart_items';
import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS } from './actions';

const appContext = createContext();

const initialState = {
  loading: false,
  cartItems: [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <appContext.Provider value={{ ...state }}>{children}</appContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(appContext);
};
