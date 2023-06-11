"use client";

import { createContext, useContext, useState, useRef } from "react";
import data from ".././../(data)/competitors.json";

const CompetitorListContext = createContext();

export function useCompetitorListContext() {
  return useContext(CompetitorListContext);
}

export function CompetitorListContextProvider({ children }) {
  const [competitorData, setCompetitorData] = useState(data);
  const [page, setPage] = useState(1);
  const formRef = useRef(null);

  function handleCompetitorSearch(e) {
    e.preventDefault();
    const searchValue = formRef.current.name.value;
    if (!searchValue) {
      return
    }
    // searchValue will need to be in the API request
    handleRequest(page, searchValue);
  }

  function handleFormReset() {
    // set page back to 1
    setPage(1);
    // make api request
    handleRequest();
    formRef.current.name.value = "";
  }

  function handleLoadNext() {
    console.log("load next called");
    // handle api request with pagination
    const nextPage = paginate();

    // console.log({ nextPage });
  }

  function paginate() {
    let nextPage;
    // increase page after each request
    setPage((prevState) => {
      nextPage = prevState + 1
      return nextPage;
    });

    console.log({ nextPage })
    return nextPage;
  }

  // server notes: if request made with no page, assume page 1
  function handleRequest(page, searchParams) {
    if (searchParams) {
      const filteredCompetitors = data.filter((competitor) => {
        if (competitor.name.toLowerCase().includes(searchParams.toLowerCase())) {
          return competitor;
        }
      });
      setCompetitorData(filteredCompetitors);
      return
    }
    setCompetitorData(data);
  }

  const contextValues = {
    competitorData,
    handleCompetitorSearch,
    handleFormReset,
    formRef,
    handleLoadNext
  };

  return (
    <CompetitorListContext.Provider value={contextValues}>
      {children}
    </CompetitorListContext.Provider>
  );
}
