import React from "react";
import styles from "./headline.module.scss";

function Headline({ competitor }) {
  return (
    <div className={styles.headline}>
      <h3>{competitor.name}</h3>
    </div>
  );
}

export default Headline;
