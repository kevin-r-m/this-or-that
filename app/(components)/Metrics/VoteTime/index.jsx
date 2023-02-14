"use client";

import styles from "./voteTime.module.scss";
import Countdown from "react-countdown";
import { useRef } from "react";

function VoteTime() {
  const timeRef = useRef(millisecondsUntilMidnight());

  function millisecondsUntilMidnight() {
    const now = new Date();
    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const millisecondsUntilMidnight = tomorrow - now;
    return millisecondsUntilMidnight;
  }

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
