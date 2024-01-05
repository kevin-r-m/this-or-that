"use client";

import Image from "../../../Atoms/Image";
import VoteButton from "../VoteButton";
import styles from "./body.module.scss";
import placeholderImage from "/public/images/placeholder-image.webp";
import { useCompetitionContext } from "../../CompetitionContextProvider";
import { InternalLink } from "@/app/components/Atoms";

function Body({ competitor }) {
  const { handleVoting } = useCompetitionContext();

  return (
    <div className={styles.body}>
      <div className={styles.imageContainer}>
        <Image alt="" source={placeholderImage} />
      </div>
      <div className={styles.buttonsContainer}>
        <InternalLink href={`/competitors/${competitor.id}`} value={"Go to profile"}/>
        <VoteButton
          callback={handleVoting}
          value="Vote"
          vote
          competitor={competitor}
        />
      </div>
    </div>
  );
}

export default Body;
