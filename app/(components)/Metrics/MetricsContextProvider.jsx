"use client";

import { createContext, useContext, useState } from "react";
import data from "./testData.json";

const MetricsContext = createContext();

export function useMetricsContext() {
  return useContext(MetricsContext);
}

export function MetricsContextProvider({ children }) {
  const [competitionState] = useState(data);
  const contextValues = { competitionState };

  return (
    <MetricsContext.Provider value={contextValues}>
      {children}
    </MetricsContext.Provider>
  );
}
