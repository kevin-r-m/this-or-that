"use client";

import { createContext, useContext, useState, useRef } from "react";
import data from "../../(data)/competition.json";

const MetricsContext = createContext();

export function useMetricsContext() {
  return useContext(MetricsContext);
}

export function MetricsContextProvider({ children }) {
  const [competitionState] = useState(data);
  const [isMetricsExpanded, setIsMetricsExpanded] = useState(false);

  const contextValues = {
    competitionState,
    isMetricsExpanded,
    calculateVoteDifference,
    millisecondsUntilMidnight,
    handleMetricToggle,
    setIsMetricsExpanded
  };

  function calculateVoteDifference() {
    return Math.abs(
      competitionState.competitorTwo.votes -
        competitionState.competitorOne.votes
    );
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

  function handleMetricToggle(e) {
    setIsMetricsExpanded((prevState) => !prevState);
  }

  return (
    <MetricsContext.Provider value={contextValues}>
      {children}
    </MetricsContext.Provider>
  );
}
