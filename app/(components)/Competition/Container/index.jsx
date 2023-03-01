"use client";

import { useCompetitionContext } from "../CompetitionContextProvider";
import CompetitorCard from "../CompetitorCard";
import styles from "./container.module.scss";

function Container() {
  const { competitionState } = useCompetitionContext();

  return (
    <section className={styles.competitorCard}>
      <CompetitorCard
        competitorName={competitionState.competitorOne.name}
        competitorState={competitionState.competitorOne.state.value}
        key={competitionState.competitorOne.name}
      />
      {/* <CompetitorCard
        competitorName={competitionState.competitorTwo.name}
        competitorState={competitionState.competitorTwo.state.value}
        key={competitionState.competitorTwo.name}
      /> */}
    </section>
  );
}

export default Container;
