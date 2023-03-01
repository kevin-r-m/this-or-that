"use client";

import { createContext, useContext, useState, useRef, useEffect } from "react";
import data from "../../(data)/competition.json";
import { setCookie, getCookie } from "@/app/(functions)";

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
  const [votedToday, setVotedToday] = useState(false);
  const duration = 5000;
  const cookieName = "votedToday";

  useEffect(() => {
    setVotedToday(getCookie(cookieName));
  }, []);

  const contextValues = {
    competitionState,
    isVoting,
    handleVoting,
    bodyRef,
    voteBodyRef,
    duration,
    votingForOne,
    votingForTwo,
    handleVotingReset,
    handleVotingConfirmation,
    votedToday,
  };

  function handleVoting(key) {
    //this will need to be updated with further logic for handling cookie setting and validation
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

  function handleVotingReset() {
    setVotingForOne(false);
    setVotingForTwo(false);
  }

  function handleVotingConfirmation() {
    const expireDays = 15;
    setCookie(cookieName, true, expireDays);
    setVotingForOne(false);
    setVotingForTwo(false);
    setVotedToday(true);
  }

  return (
    <CompetitionContext.Provider value={contextValues}>
      {children}
    </CompetitionContext.Provider>
  );
}
