"use client";

import { createContext, useContext, useState } from "react";
import data from "../../(data)/competition.json";

const CompetitorContext = createContext();

export function useCompetitorContext() {
  return useContext(CompetitorContext);
}

export function CompetitorContextProvider({ children }) {
  const [competitionState] = useState(data);
  const contextValues = { competitionState };

  return (
    <CompetitorContext.Provider value={contextValues}>
      {children}
    </CompetitorContext.Provider>
  );
}
