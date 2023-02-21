"use client";

import { useCompetitionContext } from "../CompetitionContextProvider";
import CompetitorCard from "../CompetitorCard";
import styles from "./container.module.scss";

function Container() {
  const { competitionState } = useCompetitionContext();

  return (
    <section className={styles.competitorCard}>
      <CompetitorCard competitorName={competitionState.competitorOne.name} />
    </section>
  );
}

export default Container;
