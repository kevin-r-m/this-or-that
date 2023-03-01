"use client";

import Body from "./Body";
import Headline from "./Headline";
import styles from "./competitorCard.module.scss";
import VotingBody from "./VotingBody";
import { useCompetitionContext } from "../CompetitionContextProvider";
import CompetitorTransition from "../../../(hooks)/CompetitorTransition";

function CompetitorCard({ competitorName, competitorState }) {
  const { isVoting } = useCompetitionContext();
  console.log(competitorState);

  return (
    <>
      <div className={styles.wrapper}>
        <Headline competitorName={competitorName} />

        <CompetitorTransition
          duration={500}
          state={competitorState}
          className={"body"}
        >
          <Body
            competitorName={competitorName}
            competitorState={competitorState}
          />
        </CompetitorTransition>

        <CompetitorTransition
          duration={500}
          state={!competitorState}
          className={"voting-body"}
        >
          <VotingBody competitorName={competitorName} />
        </CompetitorTransition>
      </div>
      <div></div>
    </>
  );
}

export default CompetitorCard;
