import React, { createContext, useContext, useState } from "react";

const StateContext = createContext({});

export const StateProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  return (
    <StateContext.Provider
      value={{
        filteredItems: [filteredItems, setFilteredItems],
        items: [items, setItems],
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useGetState = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("Try to useContext from StateProvider");
  }

  return context;
};
