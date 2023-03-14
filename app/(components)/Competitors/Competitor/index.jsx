import Link from "next/link";
import styles from "./competitor.module.scss";

function index() {
  return (
    <Link href="#" className={styles.wrapper}>
      <div className={styles.icon}></div>
      <p>Batman</p>
    </Link>
  );
}

export default index;
