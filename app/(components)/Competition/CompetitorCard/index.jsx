"use client";

import Body from "./Body";
import Headline from "./Headline";
import styles from "./competitorCard.module.scss";
import VotingBody from "./VotingBody";
import CompetitorTransition from "../../../(hooks)/CompetitorTransition";

function CompetitorCard({ competitor, competitorState }) {
  return (
    <>
      <div className={styles.wrapper}>
        <Headline competitor={competitor} />

        <CompetitorTransition
          duration={500}
          state={competitorState}
          className={"body-one"}
          appear
        >
          <Body
            competitor={competitor}
            competitorState={competitorState}
          />
        </CompetitorTransition>

        <CompetitorTransition
          duration={500}
          state={!competitorState}
          className={"body-two"}
          appear
        >
          <VotingBody competitor={competitor} />
        </CompetitorTransition>
      </div>
    </>
  );
}

export default CompetitorCard;
