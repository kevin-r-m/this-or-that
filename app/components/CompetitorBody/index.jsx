"use client";

import React, { useState, useEffect } from "react";
import data from "@/app/data/competitors.json";
import { Image } from "../Atoms";
import placeholder from "@/public/images/placeholder-image.webp";
import styles from "./competitor-body.module.scss";

function CompetitorBody({ id }) {
  const [competitorData, setCompetitorData] = useState({});

  function handleCompetitorQuery(id) {
    const competitor = data.filter(
      (item) => item.id.toString() === id.toString()
    );
    return competitor[0];
  }

  useEffect(() => {
    setCompetitorData(handleCompetitorQuery(id));
  }, [id]);

  return (
    <>
      <section className="container">
        <h1>{competitorData.name}</h1>
        <div className={styles.image}>
          <Image source={placeholder} alt={`Image of ${competitorData.name}`} />
        </div>
        <p>Random facts about {competitorData.name}</p>
      </section>
    </>
  );
}

export default CompetitorBody;
