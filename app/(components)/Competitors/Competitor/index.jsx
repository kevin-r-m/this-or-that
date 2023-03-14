import Link from "next/link";
import styles from "./competitor.module.scss";

function Competitor({ name, id }) {
  return (
    <Link href={`/competitors/${id}`} className={styles.wrapper}>
      <div className={styles.icon}></div>
      <p>{name}</p>
    </Link>
  );
}

export default Competitor;
