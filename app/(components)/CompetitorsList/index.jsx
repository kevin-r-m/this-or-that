import React from "react";
import { CompetitorListContextProvider } from "./CompetitorListContextProvider";
import Container from "./Container";

function index() {
  return (
    <CompetitorListContextProvider>
      <Container />
    </CompetitorListContextProvider>
  );
}

export default index;
