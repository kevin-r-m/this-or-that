"use client";

import { useMetricsContext } from "../MetricsContextProvider";
import styles from "./voteTime.module.scss";

function VoteTime() {
  return (
    <div className={styles.timeContainer}>
      <p>Time left for voting:</p>
      <p>
        <b>04:04:36</b>
      </p>
    </div>
  );
}

export default VoteTime;
