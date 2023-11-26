"use client";

import DataRow from "./DataRow";
import styles from "./yesterday.module.scss";
import { useMetricsContext } from "../MetricsContextProvider";

function Yesterday() {
  const { yesterdayRef, competitionState } = useMetricsContext();
  const { yesterday } = competitionState;

  return (
    <div ref={yesterdayRef} className={styles.container}>
      <div className={styles.outcomeContainer}>
        <h3>Yesterday&apos;s Outcome</h3>
        <div className={styles.outcomeRow}>
          <DataRow content={yesterday.winner[0]} winner />
        </div>
        <div className={styles.outcomeRow}>
          <DataRow content={yesterday.loser[0]} loser />
        </div>
        <DataRow content={"Total Votes:"} totalVotes />
      </div>
      <div className={styles.votesContainer}>
        <h3>Votes</h3>
        <DataRow content={yesterday.winner[1]} votes />
        <DataRow content={yesterday.loser[1]} votes />
        <DataRow content={yesterday.winner[1] + yesterday.loser[1]} votes />
      </div>
    </div>
  );
}

export default Yesterday;
