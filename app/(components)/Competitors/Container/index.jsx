"use client";

import React from "react";
import Competitor from "../Competitor";
import styles from "./container.module.scss";
import { useCompetitorContext } from "../CompetitorContextProvider";
import Search from "../Search";

function Container() {
  const { competitorData } = useCompetitorContext();

  return (
    <section>
      <Search />
      <div className={styles.wrapper}>
        <div className={styles.scroller}>
          {competitorData.map((competitor) => (
            <Competitor key={competitor.id} name={competitor.name} />
          ))}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.next}>Next --&gt;</button>
      </div>
    </section>
  );
}

export default Container;
