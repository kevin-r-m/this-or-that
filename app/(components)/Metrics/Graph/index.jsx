"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);
import { Bar } from "react-chartjs-2";
import { useMetricsContext } from "../MetricsContextProvider";

import styles from "./graph.module.scss";

function Graph() {
  ChartJS.defaults.color = "#000";
  ChartJS.defaults.font.size = 16;

  const { competitionState, graphRef } = useMetricsContext();

  const options = {
    responsive: true,
    barPercentage: 0.4,
    indexAxis: "y",
    // scales: {
    //   x: {
    //     beforeUpdate(axis) {
    //       const labels = axis.chart.data.labels;
    //       for (let i = 0; i < labels.length; i++) {
    //         const lbl = labels[i];
    //         if (typeof lbl === "string" && lbl.length > 7) {
    //           labels[i] = lbl.substring(0, 7) + "..."; // cutting
    //         }
    //       }
    //     },
    //   },
    // },
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  const labels = [
    competitionState.competitorOne.name,
    competitionState.competitorTwo.name,
  ];

  const data = {
    labels,
    datasets: [
      {
        data: [
          competitionState.competitorOne.votes,
          competitionState.competitorTwo.votes,
        ],
        borderColor: ["#739073", "#ff6384"],
        backgroundColor: ["#88a988a3", "#ff638487"],
      },
    ],
  };
  return (
    <div className={styles.graphContainer} ref={graphRef}>
      <Bar options={options} data={data} />
    </div>
  );
}

export default Graph;
