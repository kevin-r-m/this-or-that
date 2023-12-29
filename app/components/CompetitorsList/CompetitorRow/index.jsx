import Link from "next/link";
import styles from "./competitor-row.module.scss";

function CompetitorRow({ name, id }) {
  return (
    <Link href={`/competitors/${id}`} className={styles.wrapper}>
      <div className={styles.icon}></div>
      <p>{name}</p>
    </Link>
  );
}

export default CompetitorRow;
