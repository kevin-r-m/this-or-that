import { MetricsContextProvider } from "./MetricsContextProvider";
import Headline from "./Headline";
import styles from "./Metrics.module.scss";

function Metrics() {
  return (
    <section className={styles.wrapper}>
      <MetricsContextProvider>
        <Headline />
      </MetricsContextProvider>
    </section>
  );
}

export default Metrics;
