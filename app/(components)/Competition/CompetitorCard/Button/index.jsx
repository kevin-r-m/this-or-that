"use client";

import { useState } from "react";
import styles from "./button.module.scss";
import classNames from "classnames/bind";
import ButtonSVG from "./SVG/Svg";

function Button({ callback, value, competitorName, vote, confirm, decline }) {
  const cx = classNames.bind(styles);
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);

    if (vote) {
      setTimeout(() => callback(competitorName), 500);
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
      <ButtonSVG buttonClicked={active} vote={vote} />
      <span className={styles.text}>{value}</span>
    </button>
  );
}

export default Button;
