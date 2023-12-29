"use client";

import { useMetricsContext } from "../MetricsContextProvider";
import styles from "./totalVotes.module.scss";

function TotalVotes() {
  const { competitionState } = useMetricsContext();

  return (
    <div className={styles.votesContainer}>
      <p>
        Currently <b>{competitionState.totalVotes}</b> votes cast
      </p>
    </div>
  );
}

export default TotalVotes;
