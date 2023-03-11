"use client";

import Headline from "../Headline";
import styles from "./container.module.scss";
import Leader from "../Leader";
import TotalVotes from "../TotalVotes";
import VoteTime from "../VoteTime";
import Graph from "../Graph";
import { useMetricsContext } from "../MetricsContextProvider";
import Yesterday from "../Yesterday";

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
      <hr />
      <Yesterday />
    </section>
  );
}

export default Container;
