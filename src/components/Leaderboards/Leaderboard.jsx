import React from "react";
import data from "../../testData/competitorData.json";
import LeaderboardRow from "./LeaderboardRow";
import styles from "./leaderboard.module.scss";

function Leaderboard() {
  return (
    <div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Competitor Name</th>
            <th>Wins</th>
            <th>Loss</th>
            <th>Votes</th>
          </tr>
          {data.map((item) => {
            return <LeaderboardRow competitorInfo={item} key={item.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
