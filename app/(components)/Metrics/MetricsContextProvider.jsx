"use client";

import { createContext, useContext, useState, useRef } from "react";
import data from "../../(data)/competition.json";

const MetricsContext = createContext();

export function useMetricsContext() {
  return useContext(MetricsContext);
}

export function MetricsContextProvider({ children }) {
  const [competitionState] = useState(data);
  const expandedRef = useRef(false);
  const metricsRef = useRef();
  const graphRef = useRef();
  const yesterdayRef = useRef();

  const contextValues = {
    competitionState,
    calculateVoteDifference,
    millisecondsUntilMidnight,
    handleMetricToggle,
    graphRef,
    metricsRef,
    yesterdayRef,
  };

  function calculateVoteDifference() {
    return Math.abs(
      competitionState.competitorTwo.votes -
        competitionState.competitorOne.votes
    );
  }

  function millisecondsUntilMidnight() {
    const now = new Date();
    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const millisecondsUntilMidnight = tomorrow - now;
    return millisecondsUntilMidnight;
  }

  function handleMetricToggle(e) {
    const { target } = e;
    const graphHeight = graphRef.current.offsetHeight;
    const yesterdayHeight = yesterdayRef.current.offsetHeight;
    const metricsHeight = metricsRef.current.offsetHeight;
    const metricStaticHeight = 170;
    const paddingBuffer = 30;
    const animation = {
      duration: 250,
      iterations: 1,
      fill: "forwards",
    };
    let animationSettings;
    requestAnimationFrame(() => {
      target.classList.toggle("rotate");
    });
    if (!expandedRef.current) {
      animationSettings = {
        height: `${
          metricsHeight + (graphHeight + yesterdayHeight + paddingBuffer)
        }px`,
      };
      expandedRef.current = true;
    } else {
      animationSettings = {
        height: `${metricStaticHeight}px`,
      };
      expandedRef.current = false;
    }
    requestAnimationFrame(() => {
      metricsRef.current.animate(animationSettings, animation);
    });
  }

  return (
    <MetricsContext.Provider value={contextValues}>
      {children}
    </MetricsContext.Provider>
  );
}
