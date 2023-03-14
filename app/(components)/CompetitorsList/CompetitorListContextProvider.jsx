"use client";

import { createContext, useContext, useState } from "react";
import data from "../../(data)/competitors.json";

const CompetitorListContext = createContext();

export function useCompetitorListContext() {
  return useContext(CompetitorListContext);
}

export function CompetitorListContextProvider({ children }) {
  const [competitorData, setCompetitorData] = useState(data);
  const contextValues = { competitorData, handleCompetitorQuery };

  function handleCompetitorQuery(id) {
    const competitor = competitorData.filter((item) => item.id === id);
    return competitor;
  }

  return (
    <CompetitorListContext.Provider value={contextValues}>
      {children}
    </CompetitorListContext.Provider>
  );
}
