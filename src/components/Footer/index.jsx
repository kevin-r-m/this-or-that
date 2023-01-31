import React from "react";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footnote}>
        Created by Kevin McLaughlin &amp; Matt Lipowski <br />
        &copy;2023
      </p>
    </footer>
  );
}

export default Footer;
