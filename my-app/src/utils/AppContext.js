import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [userList, setUserList] = useState([]);
  const [userId, setUserId] = useState([]);

  return (
    <AppContext.Provider value={[userList, setUserList, userId, setUserId]}>
      {props.children}
    </AppContext.Provider>
  );
};
