"use client";

import { useCompetitionContext } from "../CompetitionContextProvider";
import CompetitorCard from "../CompetitorCard";
import VotedCard from "../VotedCard";
import styles from "./container.module.scss";

function Container() {
  const { competitionState, votingForOne, votingForTwo, votingState } = useCompetitionContext();

  return (
    <section className={styles.competitorCards}>
      {
        votingState.votedToday ?
        <VotedCard />

        :

        <>
          <CompetitorCard
            competitor={competitionState.competitorOne}
            competitorState={votingForOne}
          />
          <CompetitorCard
            competitor={competitionState.competitorTwo}
            competitorState={votingForTwo}
          />
        </>
      }
    </section>
  );
}

export default Container;
