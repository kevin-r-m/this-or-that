import { MetricsContextProvider } from "./MetricsContextProvider";
import Headline from "./Headline";
import styles from "./Metrics.module.scss";
import Leader from "./Leader";
import TotalVotes from "./TotalVotes";
import VoteTime from "./VoteTime";
import Graph from "./Graph";

function Metrics() {
  return (
    <section className={styles.wrapper}>
      <MetricsContextProvider>
        <Headline />
        <div className={styles.metricRow}>
          <Leader />
          <TotalVotes />
          <VoteTime />
        </div>
        <div>
          <Graph />
        </div>
      </MetricsContextProvider>
    </section>
  );
}

export default Metrics;
