import React, { useState } from "react";
import styles from "./Metrics.module.scss";
import BarGraph from "../BarGraph/BarGraph";
import data from "../../../testData/competitionData.json";
import { useEffect } from "react/cjs/react.development";

function CompetitionMetrics() {
  const [activeCompetition, setActiveCompetition] = useState();

  useEffect(() => {
    data.forEach((record) => {
      if (record.active) {
        setActiveCompetition(record);
        return;
      }
    });
  }, [activeCompetition]);
  return (
    <div className={styles.wrapper}>
      {activeCompetition ? (
        <>
          <h1>
            Competition #145 - {activeCompetition.competitorOneName} vs{" "}
            {activeCompetition.competitorTwoName}
          </h1>
          <div className={styles.container}>
            <BarGraph
              name={activeCompetition.name}
              image={activeCompetition.competitorTwoImg}
              votes={activeCompetition.competitorTwoVotes}
              lead={true}
            />
            <BarGraph
              name={activeCompetition.name}
              image={activeCompetition.competitorOneImg}
              votes={activeCompetition.competitorOneVotes}
              lead={false}
            />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default CompetitionMetrics;
