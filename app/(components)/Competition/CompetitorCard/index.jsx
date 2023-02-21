"use client";

import Body from "./Body";
import Headline from "./Headline";
import styles from "./competitorCard.module.scss";
import VotingBody from "./VotingBody";
import { useCompetitionContext } from "../CompetitionContextProvider";
import { CSSTransition } from "react-transition-group";

function CompetitorCard({ competitorName }) {
  const { isVoting, bodyRef, voteBodyRef, duration } = useCompetitionContext();

  return (
    <>
      <div className={styles.wrapper}>
        <Headline competitorName={competitorName} />
        <CSSTransition
          in={!isVoting}
          timeout={duration}
          classNames="my-class"
          nodeRef={bodyRef}
          unmountOnExit
        >
          <div ref={bodyRef}>
            <Body />
          </div>
        </CSSTransition>
      </div>
    </>
  );
}

export default CompetitorCard;
