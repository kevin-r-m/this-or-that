"use client";

import Today from "../Today";
import Text from "../Text";
import { useMetricsContext } from "../MetricsContextProvider";
import styles from "./headline.module.scss";

function Headline() {
  const { competitionState } = useMetricsContext();

  return (
    <div className={styles.headline}>
      <Today />
      <Text
        tag="h3"
        content={`${competitionState.competitorOne.name} vs ${competitionState.competitorTwo.name}`}
      />
    </div>
  );
}

export default Headline;
