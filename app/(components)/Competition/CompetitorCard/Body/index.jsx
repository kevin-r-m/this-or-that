"use client";

import Image from "../../../Atoms/Image";
import VoteButton from "../VoteButton";
import Link from "next/link";
import styles from "./body.module.scss";
import placeholderImage from "/public/images/placeholder-image.webp";
import { useCompetitionContext } from "../../CompetitionContextProvider";

function Body({ competitor }) {
  const { handleVoting } = useCompetitionContext();

  return (
    <div className={styles.body}>
      <div className={styles.imageContainer}>
        <Image alt="" source={placeholderImage} />
      </div>
      <div className={styles.buttonsContainer}>
        <Link className={styles.profile} href={`/competitors/${competitor.id}`}>
          <span>Go to profile</span>
        </Link>
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
