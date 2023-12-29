"use client";

import Body from "./Body";
import Headline from "./Headline";
import styles from "./competitorCard.module.scss";
import VotingBody from "./VotingBody";
import CompetitorTransition from "../../../hooks/CompetitorTransition";

function CompetitorCard({ competitor, isBeingVotedFor }) {
  return (
    <div className={styles.wrapper}>
      <Headline competitor={competitor} />

      <CompetitorTransition duration={500} state={isBeingVotedFor} className={"body-one"} appear>
        <Body competitor={competitor} />
      </CompetitorTransition>

      <CompetitorTransition duration={500} state={!isBeingVotedFor} className={"body-two"} appear>
        <VotingBody competitor={competitor} />
      </CompetitorTransition>
    </div>
  );
}

export default CompetitorCard;
