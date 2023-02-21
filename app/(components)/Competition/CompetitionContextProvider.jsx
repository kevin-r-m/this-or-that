"use client";

import { createContext, useContext, useState, useRef } from "react";
import data from "../../(data)/competition.json";

const CompetitionContext = createContext();

export function useCompetitionContext() {
  return useContext(CompetitionContext);
}

export function CompetitionContextProvider({ children }) {
  const bodyRef = useRef(null);
  const voteBodyRef = useRef(null);
  const [competitionState] = useState(data);
  const [isVoting, setIsVoting] = useState(false);
  const duration = 5000;

  const contextValues = {
    competitionState,
    isVoting,
    handleVoting,
    bodyRef,
    voteBodyRef,
    duration,
  };

  function handleVoting() {
    setIsVoting((prevState) => !prevState);
  }
  return (
    <CompetitionContext.Provider value={contextValues}>
      {children}
    </CompetitionContext.Provider>
  );
}
