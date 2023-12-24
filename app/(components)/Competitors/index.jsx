import React from "react";
import { CompetitorContextProvider } from "./CompetitorContextProvider";
import Container from "./Container";

function index() {
  return (
    <CompetitorContextProvider>
      <Container />
    </CompetitorContextProvider>
  );
}

export default index;
