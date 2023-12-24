import React from "react";
import styles from "./search.module.scss";
import { useCompetitorListContext } from "../CompetitorListContextProvider";

function Search() {
  const { formRef, handleCompetitorSearch, handleFormReset } = useCompetitorListContext();

  return (
    <>
      <form
        ref={formRef}
        className={styles.form}
        onSubmit={handleCompetitorSearch}
      >
        <input type="text" name="name" placeholder="Search by name..." />
        <input type="submit" value="Go" />
      </form>
      {formRef.current && formRef.current.name.value ? (
        <button className={styles.formReset} onClick={handleFormReset}>
          Reset search
        </button>
      ) : null}
    </>
  );
}

export default Search;
