"use client";

import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function useDataContext() {
  return useContext(DataContext);
}

export function DataContextProvider({ initialData, children }) {
  const [competitionData, setCompetitionData] = useState(initialData);

  const contextValues = {
    competitionData,
    setCompetitionData,
  };

  return (
    <DataContext.Provider value={contextValues}>
      {children}
    </DataContext.Provider>
  );
}