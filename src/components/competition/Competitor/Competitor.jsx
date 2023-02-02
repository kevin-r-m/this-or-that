import React, { useState, useRef } from "react";
import styles from "./competitor.module.scss";
import classNames from "classnames/bind";
import batman from "../../../images/batman.jpeg";

function Competitor(props) {
  const [showInfo, setShowInfo] = useState("");
  const elementRef = useRef();

  const cx = classNames.bind(styles);

  const moreInfoClass = cx({
    moreInfoContainer: true,
    show: showInfo,
  });

  function handleClick(e) {
    e.preventDefault();
    if (showInfo) {
      setShowInfo(false);
      elementRef.current.innerHTML = "See info +";
      return;
    }
    setShowInfo(true);
    elementRef.current.innerHTML = "Hide info -";
  }

  function openModal(e) {
    e.preventDefault();
    props.setSelectedCompetitor(e.target.dataset.competitor);
    props.setModalShowState(!props.modalShowState);
  }

  return (
    <>
      <div className={styles.competitorContainer}>
        <div className={styles.title}>
          <h3>{props.competitorInfo.name}</h3>
          <p
            className={styles.moreInfoToggle}
            onClick={handleClick}
            ref={elementRef}
          >
            See info +
          </p>
        </div>
        <div className={moreInfoClass}>
          <div className={styles.moreInfoBody}>
            <p>{props.competitorInfo.description}</p>
            <a href="#">Go to competitor profile</a>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src={batman} alt="batman" />
        </div>
        <button
          className={styles.voteButton}
          onClick={openModal}
          data-competitor={props.competitorInfo.name}
        >
          Cast vote for {props.competitorInfo.name}
        </button>
      </div>
    </>
  );
}

export default Competitor;
