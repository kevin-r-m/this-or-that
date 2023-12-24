"use client";

import React, { useEffect, useRef } from "react";
import CompetitorRow from "../CompetitorRow";
import styles from "./container.module.scss";
import { useCompetitorListContext } from "../CompetitorListContextProvider";
import Search from "../Search";
import ScrollShadow from "../../Global/ScrollShadow";

function Container() {
  const { competitorData, handleLoadNext } = useCompetitorListContext();
  const wrapperRef = useRef(null);
  const scrollerRef = useRef(null);

  return (
    <section>
      <Search />
      {competitorData.length > 0 ?
        <>
          <div ref={wrapperRef} className={styles.wrapper}>
            <div ref={scrollerRef} className={styles.scroller}>
              {competitorData.map((competitor) => (
                <CompetitorRow
                  key={competitor.id}
                  id={competitor.id}
                  name={competitor.name}
                />
              ))}
            </div>
            <ScrollShadow wrapperRef={wrapperRef} scrollerRef={scrollerRef} />
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={handleLoadNext} className={styles.next}>Next --&gt;</button>
          </div>
        </>
        :
        <div>
          <p>Hmm, we aren&apos;t finding anything - please try again.</p>
        </div>
      }

    </section>
  );
}

export default Container;
