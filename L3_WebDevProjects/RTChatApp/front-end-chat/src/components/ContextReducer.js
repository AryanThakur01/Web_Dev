import React from "react";
import { createContext } from "react";

export const useUrl = createContext();
export const useSocketUrl = createContext();

export const DataProviderHead = ({ children }) => {
  const url = "http://localhost:5000";
  const socketUrl = "http://localhost:5001";
  return (
    <div>
      <useSocketUrl.Provider value={socketUrl}>
        <useUrl.Provider value={url}>{children}</useUrl.Provider>
      </useSocketUrl.Provider>
    </div>
  );
};
