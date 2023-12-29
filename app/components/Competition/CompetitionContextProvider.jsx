"use client";

import { createContext, useContext, useState, useEffect } from "react";
import data from "../../data/competition.json";
import { setCookie, getCookie, getCookie_withValue } from "@/app/functions";

const CompetitionContext = createContext();

export function useCompetitionContext() {
  return useContext(CompetitionContext);
}

export function CompetitionContextProvider({ children }) {
  const [votingForOne, setVotingForOne] = useState(false);
  const [votingForTwo, setVotingForTwo] = useState(false);
  const [competitionState] = useState(data);
  const [votingState, setVotingState] = useState({
    votedToday: null,
    votedFor: null,
  });
  const duration = 5000;
  const cookieName = "votingInformation";
  const valueFromCookie = "votedFor";

  useEffect(() => {
    setVotingState(() => ({
      votedFor: getCookie_withValue(cookieName, valueFromCookie),
      votedToday: getCookie(cookieName),
    }));
  }, []);

  const contextValues = {
    competitionState,
    handleVoting,
    duration,
    votingForOne,
    votingForTwo,
    handleVotingReset,
    handleVotingConfirmation,
    votingState,
  };

  function handleVoting(key) {
    if (!key) {
      return;
    }

    const isVotingForOne = getIsVotingForOne(key);
    const isVotingForTwo = !getIsVotingForOne(key);

    setVotingForOne(isVotingForOne);
    setVotingForTwo(isVotingForTwo);
  }

  function getIsVotingForOne(key) {
    return key === competitionState.competitorOne.name;
  }

  function handleVotingReset() {
    setVotingForOne(false);
    setVotingForTwo(false);
  }

  function handleVotingConfirmation(key) {
    const expireDays = 15;
    setCookie(cookieName, expireDays, key);
    setVotingState((prevState) => ({
      ...prevState,
      votedFor: key,
      votedToday: true,
    }));
  }

  return (
    <CompetitionContext.Provider value={contextValues}>
      {children}
    </CompetitionContext.Provider>
  );
}
