"use client";

import { useState } from "react";
import styles from "./button.module.scss";
import classNames from "classnames/bind";
import ButtonSVG from "./SVG/Svg";

function Button({ callback, value, vote, confirm, decline }) {
  const cx = classNames.bind(styles);
  const [state, setState] = useState(false);

  function handleClick() {
    setState(!state);

    if (vote) {
      setTimeout(callback, 500);
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
      <ButtonSVG callback={state} vote={vote} />
      <span className={styles.text}>{value}</span>
    </button>
  );
}

export default Button;
