import DataRow from "./DataRow";
import styles from "./yesterday.module.scss";

function Yesterday() {
  return (
    <div className={styles.container}>
      <div className={styles.outcomeContainer}>
        <h3>Yesterday&apos;s Outcome</h3>
        <DataRow content={"Iceberg Lettuce"} winner />
        <DataRow content={"Peeps"} loser />
        <DataRow content={"Total Votes:"} totalVotes />
      </div>
      <div className={styles.votesContainer}>
        <h3>Votes</h3>
        <DataRow content={"215"} votes />
        <DataRow content={"146"} votes />
        <DataRow content={"361"} votes />
      </div>
    </div>
  );
}

export default Yesterday;
