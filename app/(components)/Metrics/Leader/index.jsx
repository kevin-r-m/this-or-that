"use client";

import { useMetricsContext } from "../MetricsContextProvider";
import styles from "./leader.module.scss";

function Leader() {
  const { competitionState, calculateVoteDifference } = useMetricsContext();

  return (
    <div className={styles.leaderContainer}>
      <p>
        <b>{competitionState.leader}</b> has the lead by{" "}
        {calculateVoteDifference()} votes.
      </p>
    </div>
  );
}

export default Leader;
