"use client";

import { createContext, useContext, useState } from "react";
import data from "./testData.json";

const MetricsContext = createContext();

export function useMetricsContext() {
  return useContext(MetricsContext);
}

export function MetricsContextProvider({ children }) {
  const [competitionState] = useState(data);
  const contextValues = {
    competitionState,
    calculateVoteDifference,
    millisecondsUntilMidnight,
  };

  function calculateVoteDifference() {
    return competitionState.totalVotes - competitionState.competitorTwo.votes;
  }

  function millisecondsUntilMidnight() {
    const now = new Date();
    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const millisecondsUntilMidnight = tomorrow - now;
    return millisecondsUntilMidnight;
  }

  return (
    <MetricsContext.Provider value={contextValues}>
      {children}
    </MetricsContext.Provider>
  );
}
