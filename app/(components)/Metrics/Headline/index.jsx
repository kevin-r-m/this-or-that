"use client";

import Today from "../Today";
import Text from "../Text";
import ExpandButton from "../ExpandButton";
import { useMetricsContext } from "../MetricsContextProvider";
import styles from "./headline.module.scss";

function Headline() {
  const { competitionState, handleMetricToggle } = useMetricsContext();

  return (
    <div className={styles.headlineContainer}>
      <ExpandButton callback={handleMetricToggle} />
      <Today />
      <Text
        tag="h3"
        content={`${competitionState.competitorOne.name} vs ${competitionState.competitorTwo.name}`}
      />
    </div>
  );
}

export default Headline;
