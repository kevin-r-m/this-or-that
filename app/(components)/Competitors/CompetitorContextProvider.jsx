"use client";

import { createContext, useContext } from "react";

const CompetitorContext = createContext();

export function useCompetitorContext() {
  return useContext(CompetitorContext);
}

export function CompetitorContextProvider({ children }) {
  const contextValues = {};

  return (
    <CompetitorContext.Provider value={contextValues}>
      {children}
    </CompetitorContext.Provider>
  );
}
