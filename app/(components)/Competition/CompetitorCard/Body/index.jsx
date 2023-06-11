"use client";

import Image from "../../../Global/Image";
import Button from "../Button";
import Link from "next/link";
import styles from "./body.module.scss";
import placeholderImage from "/public/images/placeholder-image.webp";
import { useCompetitionContext } from "../../CompetitionContextProvider";

function Body({ competitor, competitorState }) {
  const { handleVoting } = useCompetitionContext();

  return (
    <div className={styles.body}>
      <div className={styles.imageContainer}>
        <Image alt="" source={placeholderImage} />
      </div>
      <div className={styles.buttonsContainer}>
        <Link className={styles.profile} href={`/competitors/${competitor.id}`}>Go to profile</Link>
        <Button
          callback={handleVoting}
          value="Vote"
          vote
          competitor={competitor}
          competitorState={competitorState}
        />
      </div>
    </div>
  );
}

export default Body;
