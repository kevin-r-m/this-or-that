"use client";

import Body from "./Body";
import Headline from "./Headline";
import styles from "./competitorCard.module.scss";
import VotingBody from "./VotingBody";
import CompetitorTransition from "../../../(hooks)/CompetitorTransition";

function CompetitorCard({ competitorName, competitorState }) {
  return (
    <>
      <div className={styles.wrapper}>
        <Headline competitorName={competitorName} />

        <CompetitorTransition
          duration={500}
          state={competitorState}
          className={"body-one"}
          appear
        >
          <Body
            competitorName={competitorName}
            competitorState={competitorState}
          />
        </CompetitorTransition>

        <CompetitorTransition
          duration={500}
          state={!competitorState}
          className={"body-two"}
          appear
        >
          <VotingBody competitorName={competitorName} />
        </CompetitorTransition>
      </div>
    </>
  );
}

export default CompetitorCard;
