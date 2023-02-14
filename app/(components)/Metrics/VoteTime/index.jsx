"use client";

import styles from "./voteTime.module.scss";
import Countdown from "react-countdown";
import { useRef } from "react";
import { useMetricsContext } from "../MetricsContextProvider";

function VoteTime() {
  const { millisecondsUntilMidnight } = useMetricsContext();
  const timeRef = useRef(millisecondsUntilMidnight());

  return (
    <div className={styles.timeContainer}>
      <p>Time left for voting:</p>
      <p>
        <b>
          <Countdown date={Date.now() + timeRef.current} />
        </b>
      </p>
    </div>
  );
}

export default VoteTime;
