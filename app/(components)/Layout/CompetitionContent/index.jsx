"use client";

import { useState } from "react";
import Yesterday from "../../Yesterday";
import Metrics from "../../Metrics";
import Competition from "../../Competition";
import Button from "../../Atoms/Button";
import styles from "./competition-content.module.scss";
import classnames from "classnames";


function CompetitionContent() {
    const [activeView, setActiveView] = useState("today");

    function TodayContent() {
        return (
            <>
                <Metrics />
                <Competition />
            </>
        )
    }

    function YesterdayContent() {
        return (
            <>
                <Yesterday />
            </>
        )
    }

    function ViewSelector() {
        return (
            <div className={styles.viewSelector}>
                <div className={classnames(styles.selector, activeView === "yesterday" ? styles.active : undefined)}>
                    <Button type={"secondary"} onClick={() => setActiveView("yesterday")}>Yesterday</Button>
                </div>
                <div className={classnames(styles.selector, activeView === "today" ? styles.active : undefined)}>
                    <Button type={"secondary"} onClick={() => setActiveView("today")}>Today</Button>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <ViewSelector />

            {activeView === "yesterday" ? <YesterdayContent /> : <TodayContent />}
        </div>
    );
}

export default CompetitionContent;