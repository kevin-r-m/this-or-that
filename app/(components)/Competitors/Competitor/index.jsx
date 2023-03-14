import Link from "next/link";
import styles from "./competitor.module.scss";

function Competitor({ name }) {
  return (
    <Link href="#" className={styles.wrapper}>
      <div className={styles.icon}></div>
      <p>{name}</p>
    </Link>
  );
}

export default Competitor;
