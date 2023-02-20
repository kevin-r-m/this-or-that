"use client";

import { createContext, useContext, useState } from "react";
import data from "../../(data)/competition.json";

const CompetitionContext = createContext();

export function useCompetitionContext() {
  return useContext(CompetitionContext);
}

export function CompetitionContextProvider({ children }) {
  const [competitionState] = useState(data);
  const contextValues = { competitionState };

  return (
    <CompetitionContext.Provider value={contextValues}>
      {children}
    </CompetitionContext.Provider>
  );
}
