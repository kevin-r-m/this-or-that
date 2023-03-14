import React from "react";
import styles from "./search.module.scss";

function Search() {
  return (
    <form className={styles.form} onSubmit={() => console.log("boom")}>
      <input type="text" placeholder="Search by name..." />
      <input type="submit" value="Go" />
    </form>
  );
}

export default Search;
