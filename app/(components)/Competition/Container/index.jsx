"use client";

import CompetitorTransition from "@/app/(hooks)/CompetitorTransition";
import { useCompetitionContext } from "../CompetitionContextProvider";
import CompetitorCard from "../CompetitorCard";
import VotedCard from "../VotedCard";
import styles from "./container.module.scss";

function Container() {
  const { competitionState, votingForOne, votingForTwo, votingState } =
    useCompetitionContext();

  if (votingState.votedFor === null) {
    return <></>;
  } else {
    return (
      <section className={styles.competitorCards}>
        <CompetitorTransition
          duration={500}
          state={!votingState.votedToday}
          className={"body-one"}
          competition
          appear
        >
          <VotedCard />
        </CompetitorTransition>
        <CompetitorTransition
          duration={500}
          state={votingState.votedToday}
          className={"body-two"}
          competition
          appear
        >
          <CompetitorCard
            competitor={competitionState.competitorOne}
            competitorState={votingForOne}
            key={competitionState.competitorOne.name}
          />
          <CompetitorCard
            competitor={competitionState.competitorTwo}
            competitorState={votingForTwo}
            key={competitionState.competitorTwo.name}
          />
        </CompetitorTransition>
      </section>
    );
  }
}

export default Container;
