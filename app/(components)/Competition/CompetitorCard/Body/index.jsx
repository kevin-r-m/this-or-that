"use client";

import Image from "../../../Global/Image";
import Button from "../Button";
import styles from "./body.module.scss";
import placeholderImage from "/public/images/placeholder-image.webp";
import { useCompetitionContext } from "../../CompetitionContextProvider";

function Body({ competitorName }) {
  const { handleVoting } = useCompetitionContext();

  return (
    <div className={styles.body}>
      <div className={styles.imageContainer}>
        <Image alt="" source={placeholderImage} />
      </div>
      <div className={styles.buttonsContainer}>
        <Button value="Go to profile" />
        <Button
          callback={handleVoting}
          value="Vote"
          vote
          competitorName={competitorName}
        />
      </div>
    </div>
  );
}

export default Body;
