"use client";

import { createContext, useContext, useState, useRef } from "react";
import data from ".././../(data)/competitors.json";

const CompetitorListContext = createContext();

export function useCompetitorListContext() {
  return useContext(CompetitorListContext);
}

export function CompetitorListContextProvider({ children }) {
  const [competitorData, setCompetitorData] = useState(data);
  const formRef = useRef(null);

  function handleCompetitorSearch(e) {
    e.preventDefault();
    const searchValue = formRef.current.name.value;
    const filteredCompetitors = data.filter((competitor) => {
      if (competitor.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return competitor;
      }
    });
    setCompetitorData(filteredCompetitors);
  }

  function handleFormReset() {
    setCompetitorData(data);
    formRef.current.name.value = "";
  }

  const contextValues = {
    competitorData,
    handleCompetitorSearch,
    handleFormReset,
    formRef,
  };

  return (
    <CompetitorListContext.Provider value={contextValues}>
      {children}
    </CompetitorListContext.Provider>
  );
}
