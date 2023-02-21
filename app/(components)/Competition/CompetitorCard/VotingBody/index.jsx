"use client";

import React from "react";
import Button from "../Button";
import styles from "./votingBody.module.scss";
import { useCompetitionContext } from "../../CompetitionContextProvider";

function VotingBody({ competitorName }) {
  const { handleVoting } = useCompetitionContext();

  return (
    <div className={styles.votingBody}>
      <p>Are you sure you want to cast your vote for {competitorName}?</p>
      <div className={styles.buttonsContainer}>
        <Button callback={handleVoting} value="Yes" confirm />
        <Button callback={handleVoting} value="No" decline />
      </div>
    </div>
  );
}

export default VotingBody;
