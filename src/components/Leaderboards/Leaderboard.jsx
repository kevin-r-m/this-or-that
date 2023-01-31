import React from "react";
import LeaderboardRow from "./LeaderboardRow";
import "./leaderboard.scss";

function Leaderboard({ data }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th className="border border-right-0 pl-2">Competitor Name</th>
            <th className="border pl-2">Wins</th>
            <th className="border pl-2">Loss</th>
            <th className="border pl-2">Votes</th>
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
