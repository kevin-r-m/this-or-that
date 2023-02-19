import React from "react";
import styles from "./headline.module.scss";

function index({ competitorName }) {
  return (
    <div>
      <h3>{competitorName}</h3>
    </div>
  );
}

export default index;
