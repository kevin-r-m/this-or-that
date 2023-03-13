import styles from "./datarow.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";

function DataRow({ content, winner, loser, totalVotes, votes, ...props }) {
  const cx = classNames.bind(styles);

  const containerClasses = cx({
    container: true,
    totalVotes: totalVotes,
    votes: votes,
    winner: winner,
    loser: loser,
  });

  return (
    <div className={containerClasses} {...props}>
      <p>{content}</p>
    </div>
  );
}

export default DataRow;
