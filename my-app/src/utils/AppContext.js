import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [classList, setClassList] = useState([]);
  const [userId, setUserId] = useState([]);

  return (
    <AppContext.Provider value={[classList, setClassList, userId, setUserId]}>
      {props.children}
    </AppContext.Provider>
  );
};
