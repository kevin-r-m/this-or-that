"use client";

import Today from "../Today";
import Text from "../Text";
import ExpandButton from "../ExpandButton";
import { useMetricsContext } from "../MetricsContextProvider";
import styles from "./headline.module.scss";

function Headline() {
  const { competitionState, handleMetricToggle, isMetricsExpanded } = useMetricsContext();

  return (
    <div className={styles.headlineContainer}>
      <ExpandButton onClick={handleMetricToggle} isActive={isMetricsExpanded} />
      <Today />
      <Text
        tag="h3"
        content={`${competitionState.competitorOne.name} vs ${competitionState.competitorTwo.name}`}
      />
    </div>
  );
}

export default Headline;
