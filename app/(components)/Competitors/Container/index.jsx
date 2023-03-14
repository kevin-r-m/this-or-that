import React from "react";
import Competitor from "../Competitor";
import styles from "./container.module.scss";

function index() {
  return (
    <section className={styles.wrapper}>
      <Competitor />
    </section>
  );
}

export default index;
