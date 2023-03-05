"use client";

import React from "react";
import Button from "../Button";
import styles from "./votingBody.module.scss";
import { useCompetitionContext } from "../../CompetitionContextProvider";

function VotingBody({ competitorName }) {
  const { handleVotingReset, handleVotingConfirmation } =
    useCompetitionContext();

  return (
    <div className={"voting-body " + styles.votingBody}>
      <p>Alright, confirm your vote for {competitorName}?</p>
      <div className={styles.buttonsContainer}>
        <Button
          competitorName={competitorName}
          callback={handleVotingConfirmation}
          value="Confirm"
          confirm
        />
        <Button callback={handleVotingReset} value="Take me back" decline />
      </div>
    </div>
  );
}

export default VotingBody;
