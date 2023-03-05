"use client";

import React from "react";
import styles from "./votedCard.module.scss";
import { useCompetitionContext } from "../CompetitionContextProvider";

function VotedCard() {
  const { votingState } = useCompetitionContext();

  return (
    <div className={styles.wrapper}>
      <div className={styles.headline}>
        <h3>Thanks - we got your vote for {votingState.votedFor}!</h3>
        <p>
          Come back tomorrow to see who won{" "}
          <span className={styles.emoji}>🤝</span>
        </p>
      </div>
    </div>
  );
}

export default VotedCard;
