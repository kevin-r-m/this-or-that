"use client";

import DataRow from "../DataRow";
import Goodluck from "../Goodluck";
import styles from "./container.module.scss";
import { useYesterdayContext } from "../YesterdayContextProvider";
import WinnerCard from "../WinnerCard";

function Container() {
    const { competitionState } = useYesterdayContext();
    const { yesterday } = competitionState;

    const [winnerName, winnerVotes] = yesterday.winner;
    const [loserName, loserVotes] = yesterday.loser;

    const totalVotes = winnerVotes + loserVotes;
    const voteDifference = totalVotes - winnerVotes;


    return (
        <>
            <WinnerCard winnerName={winnerName} />
            <section className={styles.wrapper}>
                <h3>Roundup</h3>
                <p>Well, it was a fierce match-up between {winnerName} and {loserName}. While it was close, {winnerName} won by {voteDifference} votes. {loserName} gave a good effort, it just was not meant to be.</p>
                <div className={styles.tableContainer}>
                    <div className={styles.outcomeContainer}>
                        <h3>Competitors</h3>
                        <div className={styles.outcomeRow}>
                            <DataRow content={winnerName} winner />
                        </div>
                        <div className={styles.outcomeRow}>
                            <DataRow content={loserName} loser />
                        </div>
                        <DataRow content={"Total Votes:"} totalVotes />
                    </div>
                    <div className={styles.votesContainer}>
                        <h3>Votes</h3>
                        <DataRow content={winnerVotes} votes />
                        <DataRow content={loserVotes} votes />
                        <DataRow content={totalVotes} votes />
                    </div>
                </div>
            </section>

            <section className={styles.goodluckContainer}>
                <Goodluck loserName={loserName} />
            </section>
        </>
    );
}

export default Container;