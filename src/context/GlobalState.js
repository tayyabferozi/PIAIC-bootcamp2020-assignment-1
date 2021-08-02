import React, { createContext, useReducer } from "react";

import Reducer from "./Reducer";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, {
    transactions: [],
    dispatch: () => {},
  });
  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
