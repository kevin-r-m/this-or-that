"use client";

import { useEffect, useState } from "react";
import { useMetricsContext } from "../MetricsContextProvider";
import Countdown from "react-countdown";
import styles from "./voteTime.module.scss";

function VoteTime() {
  const [timeLeft, setTimeLeft] = useState();
  const { millisecondsUntilMidnight } = useMetricsContext();

  useEffect(() => {
    setTimeLeft(Date.now() + millisecondsUntilMidnight());
  }, [millisecondsUntilMidnight]);

  return (
    <div className={styles.timeContainer}>
      <p>Time left for voting:</p>
      <p>
        <b>{timeLeft ? <Countdown date={timeLeft} /> : "00:00:00:00"}</b>
      </p>
    </div>
  );
}

export default VoteTime;
