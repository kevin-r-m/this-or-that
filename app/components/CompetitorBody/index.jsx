"use client";

import React, { useState, useEffect } from "react";
import data from "@/app/data/competitors.json";
import Image from "next/image";
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

  const imgStyles = {
    width: "100%",
    height: "auto",
  };

  return (
    <>
      <h1>{competitorData.name}</h1>
      <section>
        <div className={styles.image}>
          <Image
            src={placeholder}
            alt={`Image of ${competitorData.name}`}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            style={imgStyles}
            priority
          />
        </div>
        <p>Random facts about {competitorData.name}</p>
      </section>
    </>
  );
}

export default CompetitorBody;
