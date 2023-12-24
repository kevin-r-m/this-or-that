"use client";

import { useState, useEffect } from "react";
import styles from "./vote-button.module.scss";
import classNames from "classnames/bind";
import ButtonSVG from "./ButtonSvg";

function VoteButton({ callback, value, competitor, vote, confirm, decline }) {
  const cx = classNames.bind(styles);
  const [active, setActive] = useState(false);
  const [useAnimation, setUseAnimation] = useState(false);

  useEffect(() => {
    if (vote || confirm) {
      setUseAnimation(true);
    }
  }, [vote, confirm]);

  function handleClick() {
    setActive(!active);

    if (vote || confirm) {
      setTimeout(() => callback(competitor.name), 500);
      return;
    }
    callback();
  }

  const buttonClass = cx({
    button: true,
    vote: vote,
    confirm: confirm,
    decline: decline,
  });

  return (
    <button onClick={handleClick} className={buttonClass}>
      <div className={styles.text}>
        {useAnimation && <ButtonSVG buttonClicked={active} />}
        <span>{value}</span>
      </div>
    </button>
  );
}

export default VoteButton;
