"use client";

import React, { useEffect, useRef } from "react";
import CompetitorRow from "../CompetitorRow";
import styles from "./container.module.scss";
import { useCompetitorListContext } from "../CompetitorListContextProvider";
import Search from "../Search";

function Container() {
  const { competitorData } = useCompetitorListContext();
  const wrapperRef = useRef(null);
  const scrollerRef = useRef(null);
  const shadowRef = useRef(null);

  useEffect(() => {
    const contentScrollHeight =
      scrollerRef.current.scrollHeight - wrapperRef.current.offsetHeight;

    scrollerRef.current.addEventListener("scroll", function () {
      const currentScroll = this.scrollTop / contentScrollHeight;
      shadowRef.current.style.opacity = 1 - currentScroll;
    });
  }, []);

  return (
    <section>
      <Search />
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
        <div ref={shadowRef} className={styles.shadow}></div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.next}>Next --&gt;</button>
      </div>
    </section>
  );
}

export default Container;
