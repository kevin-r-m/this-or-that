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
    const [buttonClickPosition, setButtonClickPosition] = useState(0);

    function handleClick(event) {
        const buttonValue = event.target.dataset.buttonValue;

        const buttonRect = event.currentTarget.getBoundingClientRect();
        const clickX = event.clientX - buttonRect.left;
        const buttonWidth = buttonRect.width;

        const leftPercentage = (clickX / buttonWidth) * 100;

        setButtonClickPosition(leftPercentage);
        setActiveView(buttonValue);
    }

    function TodayContent() {
        return (
            <div className={classnames(styles.view, styles.todayView, activeView === "today" ? styles.active : null)}>
                <Metrics />
                <Competition />
            </div>
        )
    }

    function YesterdayContent() {
        return (
            <div className={classnames(styles.view, styles.yesterdayView, activeView === "yesterday" ? styles.active : null)}>
                <Yesterday />
            </div>
        )
    }

    function ViewSelector() {
        return (
            <>
                <div className={styles.viewSelector}>
                    <div className={classnames(styles.selector, activeView === "yesterday" ? styles.active : undefined)} style={{ '--click-position': buttonClickPosition + '%' }}>
                        <Button type={"secondary"} onClick={handleClick} data-button-value="yesterday">Yesterday</Button>
                    </div>
                    <div className={classnames(styles.selector, activeView === "today" ? styles.active : undefined)} style={{ '--click-position': buttonClickPosition + '%' }}>
                        <Button type={"secondary"} onClick={handleClick} data-button-value="today">Today</Button>
                    </div>
                </div>
                <hr className={styles.rule} />
            </>
        )
    }

    return (
        <div className="container">
            <ViewSelector />
            <div className={styles.viewsContainer}>
                <YesterdayContent />
                <TodayContent />
            </div>
        </div>
    );
}

export default CompetitionContent;