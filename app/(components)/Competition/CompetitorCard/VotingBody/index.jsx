"use client";

import React from "react";
import Button from "../Button";
import styles from "./votingBody.module.scss";
import { useCompetitionContext } from "../../CompetitionContextProvider";

function VotingBody({ competitorName }) {
  const { handleVotingReset, handleVotingConfirmation } =
    useCompetitionContext();

  return (
    <div className={styles.votingBody}>
      <p>Alright, confirm you vote for {competitorName}?</p>
      <div className={styles.buttonsContainer}>
        <Button callback={handleVotingConfirmation} value="Confirm" confirm />
        <Button callback={handleVotingReset} value="Take me back" decline />
      </div>
    </div>
  );
}

export default VotingBody;
