"use client";

import React from "react";
import CompetitorRow from "../CompetitorRow";
import styles from "./container.module.scss";
import { useCompetitorListContext } from "../CompetitorListContextProvider";
import Search from "../Search";

function Container() {
  const { competitorData } = useCompetitorListContext();

  return (
    <section>
      <Search />
      <div className={styles.wrapper}>
        <div className={styles.scroller}>
          {competitorData.map((competitor) => (
            <CompetitorRow
              key={competitor.id}
              id={competitor.id}
              name={competitor.name}
            />
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
