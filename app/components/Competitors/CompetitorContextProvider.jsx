"use client";

import { createContext, useContext, useState } from "react";
import data from "../../data/competitors.json";

const CompetitorContext = createContext();

export function useCompetitorContext() {
  return useContext(CompetitorContext);
}

export function CompetitorContextProvider({ children }) {
  const [competitorData, setCompetitorData] = useState(data);
  const contextValues = { competitorData };

  return (
    <CompetitorContext.Provider value={contextValues}>
      {children}
    </CompetitorContext.Provider>
  );
}
