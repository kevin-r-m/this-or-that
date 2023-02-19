"use client";

import { createContext, useContext, useState, useRef } from "react";
import data from "./testData.json";

const CompetitorContext = createContext();

export function useCompetitorContext() {
  return useContext(CompetitorContext);
}

function CompetitorContextProvider() {
  const contextValues = {};

  return (
    <CompetitorContext.Provider value={contextValues}>
      {children}
    </CompetitorContext.Provider>
  );
}

export default CompetitorContextProvider;
