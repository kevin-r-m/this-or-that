import styles from "./skeleton.module.scss";

function Skeleton() {
  return (
    <>
      <div className={styles.skeleton}>
        <section className={styles.metrics}></section>
        <section className={styles.competition}>
          <div className={styles.competitor__one}></div>
          <div className={styles.competitor__two}></div>
        </section>
      </div>
    </>
  );
}

export default Skeleton;
