"use client";

import DataRow from "../DataRow";
import styles from "./container.module.scss";
import { useYesterdayContext } from "../YesterdayContextProvider";

function Container() {
    const { competitionState } = useYesterdayContext();
    const { yesterday } = competitionState;

    const [winnerName, winnerVotes] = yesterday.winner;
    const [loserName, loserVotes] = yesterday.loser;

    const totalVotes = winnerVotes + loserVotes;
    const voteDifference = totalVotes - winnerVotes;


    return (
        <>
            <section className={styles.wrapper}>
                <span>Yesterday - {winnerName} won by {voteDifference} votes</span>
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
        </>
    );
}

export default Container;