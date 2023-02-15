"use client";

import Headline from "../Headline";
import styles from "./container.module.scss";
import Leader from "../Leader";
import TotalVotes from "../TotalVotes";
import VoteTime from "../VoteTime";
import Graph from "../Graph";
import { useMetricsContext } from "../MetricsContextProvider";

function Container() {
  const { metricsRef } = useMetricsContext();

  return (
    <section className={styles.wrapper} ref={metricsRef}>
      <Headline />
      <div className={styles.metricRow}>
        <Leader />
        <TotalVotes />
        <VoteTime />
      </div>
      <Graph />
    </section>
  );
}

export default Container;
