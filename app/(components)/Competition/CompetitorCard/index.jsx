"use client";

import Body from "./Body";
import Headline from "./Headline";
import styles from "./competitorCard.module.scss";
import VotingBody from "./VotingBody";
import { useCompetitionContext } from "../CompetitionContextProvider";
import CompetitorTransition from "../../../(hooks)/CompetitorTransition";

function CompetitorCard({ competitorName }) {
  const { isVoting } = useCompetitionContext();

  return (
    <>
      <div className={styles.wrapper}>
        <Headline competitorName={competitorName} />

        <CompetitorTransition
          duration={1000}
          state={isVoting}
          className={"body"}
        >
          <Body />
        </CompetitorTransition>

        <CompetitorTransition
          duration={1000}
          state={!isVoting}
          className={"voting-body"}
        >
          <VotingBody competitorName={competitorName} />
        </CompetitorTransition>
      </div>
    </>
  );
}

export default CompetitorCard;
