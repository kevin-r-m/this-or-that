import React from "react";
import Nav from "../Nav/Nav";
import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Nav />
    </header>
  );
}

export default Header;
