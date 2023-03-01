"use client";

import { useCompetitionContext } from "../CompetitionContextProvider";
import CompetitorCard from "../CompetitorCard";
import styles from "./container.module.scss";

function Container() {
  const { competitionState, votingForOne, votingForTwo } =
    useCompetitionContext();

  return (
    <section className={styles.competitorCard}>
      <CompetitorCard
        competitorName={competitionState.competitorOne.name}
        competitorState={votingForOne}
        key={competitionState.competitorOne.name}
      />
      <CompetitorCard
        competitorName={competitionState.competitorTwo.name}
        competitorState={votingForTwo}
        key={competitionState.competitorTwo.name}
      />
    </section>
  );
}

export default Container;
