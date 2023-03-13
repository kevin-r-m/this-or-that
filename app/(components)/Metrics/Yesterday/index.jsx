"use client";

import Image from "next/image";
import DataRow from "./DataRow";
import styles from "./yesterday.module.scss";
import trophy from "/public/images/trophy.svg";
import dislike from "/public/images/dislike.svg";
import { useMetricsContext } from "../MetricsContextProvider";

function Yesterday() {
  const { yesterdayRef } = useMetricsContext();
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
          <DataRow content={"Iceberg Lettuce"} winner />
        </div>
        <div className={styles.outcomeRow}>
          <Image
            height={imageSize}
            width={imageSize}
            src={dislike}
            alt="loser"
          />
          <DataRow content={"Peeps"} loser />
        </div>
        <DataRow content={"Total Votes:"} totalVotes />
      </div>
      <div className={styles.votesContainer}>
        <h3>Votes</h3>
        <DataRow content={"215"} votes />
        <DataRow content={"146"} votes />
        <DataRow content={"361"} votes />
      </div>
    </div>
  );
}

export default Yesterday;
