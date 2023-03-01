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
  const [isVoting, setIsVoting] = useState(false);
  const [votingForOne, setVotingForOne] = useState(false);
  const [votingForTwo, setVotingForTwo] = useState(false);
  const [competitionState] = useState(data);
  const duration = 5000;

  const contextValues = {
    competitionState,
    isVoting,
    handleVoting,
    bodyRef,
    voteBodyRef,
    duration,
    votingForOne,
    votingForTwo,
  };

  function handleVoting(key) {
    setIsVoting((prevState) => !prevState);

    if (!key) {
      return;
    }

    if (key === competitionState.competitorOne.name) {
      setVotingForOne((prevState) => !prevState);
      setVotingForTwo(false);
      return;
    }

    if (key === competitionState.competitorTwo.name) {
      setVotingForTwo((prevState) => !prevState);
      setVotingForOne(false);
      return;
    }
  }

  return (
    <CompetitionContext.Provider value={contextValues}>
      {children}
    </CompetitionContext.Provider>
  );
}
