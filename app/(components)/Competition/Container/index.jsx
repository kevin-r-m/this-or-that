"use client";

import { useCompetitionContext } from "../CompetitionContextProvider";
import CompetitorCard from "../CompetitorCard";
import VotedCard from "../VotedCard";
import styles from "./container.module.scss";

function Container() {
  const { competitionState, votingForOne, votingForTwo, votingState } =
    useCompetitionContext();

  return (
    <section className={styles.competitorCards}>
      {votingState.votedToday ? (
        <VotedCard />
      ) : (
        <>
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
        </>
      )}
    </section>
  );
}

export default Container;
