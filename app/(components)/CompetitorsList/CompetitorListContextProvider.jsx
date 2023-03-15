"use client";

import { createContext, useContext, useState } from "react";
import data from ".././../(data)/competitors.json";

const CompetitorListContext = createContext();

export function useCompetitorListContext() {
  return useContext(CompetitorListContext);
}

export function CompetitorListContextProvider({ children }) {
  const [competitorData] = useState(data);

  const contextValues = {
    competitorData,
  };

  return (
    <CompetitorListContext.Provider value={contextValues}>
      {children}
    </CompetitorListContext.Provider>
  );
}
