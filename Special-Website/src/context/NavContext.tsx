"use client"
import React, { Dispatch, SetStateAction, createContext, useState } from "react";
type NavContextValue = {
    Open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  };
  
export  const NavContext = createContext<NavContextValue>({
    Open: false,
    setOpen: () => {},
  });

const NavContextProvider = ({ children }) => {
  const [Open, setOpen] = useState(false);
  return (
    <NavContext.Provider value={{ Open , setOpen }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;
