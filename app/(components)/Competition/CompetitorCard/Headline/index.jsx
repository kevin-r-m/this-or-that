import React from "react";
import styles from "./headline.module.scss";

function Headline({ competitorName }) {
  return (
    <div className={styles.headline}>
      <h3>{competitorName}</h3>
    </div>
  );
}

export default Headline;
