"use client";

import Headline from "../Headline";
import styles from "./container.module.scss";
import Leader from "../Leader";
import TotalVotes from "../TotalVotes";
import VoteTime from "../VoteTime";
import Graph from "../Graph";
import { useMetricsContext } from "../MetricsContextProvider";
import classnames from "classnames";

function Container() {
  const { isMetricsExpanded } = useMetricsContext();

  return (
    <section className={styles.wrapper}>
      <Headline />
      <div className={styles.metricRow}>
        <Leader />
        <TotalVotes />
        <VoteTime />
      </div>
      <div className={classnames(styles.expandableContent, isMetricsExpanded ? styles.expanded : undefined)}>
        <div>
          <Graph />
        </div>
      </div>
    </section>
  );
}

export default Container;
