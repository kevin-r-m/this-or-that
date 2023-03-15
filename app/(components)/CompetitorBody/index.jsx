"use client";

import React from "react";
import data from "@/app/(data)/competitors.json";
import Image from "next/image";
import placeholder from "@/public/images/placeholder-image.webp";
import styles from "./competitor-body.module.scss";

function CompetitorBody({ id }) {
  function handleCompetitorQuery(id) {
    const competitor = data.filter(
      (item) => item.id.toString() === id.toString()
    );
    return competitor[0];
  }

  const competitor = handleCompetitorQuery(id);

  const imgStyles = {
    width: "100%",
    height: "auto",
  };

  return (
    <>
      <h1>{competitor.name}</h1>
      <section>
        <div className={styles.image}>
          <Image
            src={placeholder}
            alt={`Image of ${competitor.name}`}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            style={imgStyles}
            priority
          />
        </div>
        <p>Random facts about {competitor.name}</p>
      </section>
    </>
  );
}

export default CompetitorBody;
