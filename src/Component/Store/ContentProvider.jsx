import React, { Children, createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";
export const cartContent = createContext();

function ContentProvider({ children }) {
  const [cart, dispatch] = useReducer(CartReducer, []);
  return (
    <cartContent.Provider value={{ cart, dispatch }}>
      {children}
    </cartContent.Provider>
  );
}

export default ContentProvider;
