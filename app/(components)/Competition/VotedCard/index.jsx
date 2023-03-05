"use client";

import React from "react";
import styles from "./votedCard.module.scss";
import { useCompetitionContext } from "../CompetitionContextProvider";

function VotedCard() {
  const { votingState } = useCompetitionContext();
  console.log(votingState);
  return (
    <div className={styles.wrapper}>
      <div className={styles.headline}>
        <h3>Thanks - we got your vote for {votingState.votedFor}!</h3>
      </div>
    </div>
  );
}

export default VotedCard;
