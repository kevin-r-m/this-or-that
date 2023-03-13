"use client";

import Image from "next/image";
import DataRow from "./DataRow";
import styles from "./yesterday.module.scss";
import trophy from "/public/images/trophy.svg";
import dislike from "/public/images/dislike.svg";
import { useMetricsContext } from "../MetricsContextProvider";

function Yesterday() {
  const { yesterdayRef, competitionState } = useMetricsContext();
  const { yesterday } = competitionState;
  const imageSize = 35;

  return (
    <div ref={yesterdayRef} className={styles.container}>
      <div className={styles.outcomeContainer}>
        <h3>Yesterday&apos;s Outcome</h3>
        <div className={styles.outcomeRow}>
          <Image
            height={imageSize}
            width={imageSize}
            src={trophy}
            alt="winner"
          />
          <DataRow content={yesterday.winner[0]} winner />
        </div>
        <div className={styles.outcomeRow}>
          <Image
            height={imageSize}
            width={imageSize}
            src={dislike}
            alt="loser"
          />
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
