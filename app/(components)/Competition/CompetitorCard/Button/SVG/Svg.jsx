import React from "react";
import styles from "./svg.module.scss";
import classNames from "classnames/bind";

function ButtonSVG({ callback, vote }) {
  const cx = classNames.bind(styles);

  const svgStyles = cx({
    svgClockwise: true,
  });

  const circleStyles = cx({
    clockwiseCircle: true,
    animate: callback && vote,
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      className={svgStyles}
      viewBox="0 0 255 255"
    >
      <circle cx="50%" cy="50%" r={75} className={circleStyles} />
    </svg>
  );
}

export default ButtonSVG;
