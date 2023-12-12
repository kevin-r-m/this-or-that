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
                <div className={classnames(styles.selector, activeView === "yesterday" ? styles.active : undefined)} style={{'--click-position': buttonClickPosition + '%'}}>
                    <Button type={"secondary"} onClick={handleClick} data-button-value="yesterday">Yesterday</Button>
                </div>
                <div className={classnames(styles.selector, activeView === "today" ? styles.active : undefined)} style={{'--click-position': buttonClickPosition + '%'}}>
                    <Button type={"secondary"} onClick={handleClick} data-button-value="today">Today</Button>
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