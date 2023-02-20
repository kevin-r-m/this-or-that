"use client";

import Body from "../Body";
import Headline from "../Headline";
import styles from "./container.module.scss";
import { useCompetitorContext } from "../CompetitorContextProvider";

function Container() {
  const competitorContext = useCompetitorContext();

  return (
    <>
      <section className={styles.wrapper}>
        <Headline competitorName={"Batman"} />
        <Body />
      </section>
      <section className={styles.wrapper}>
        <Headline competitorName={"Apple Pie"} />
        <Body />
      </section>
    </>
  );
}

export default Container;
