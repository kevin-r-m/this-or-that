import React from "react";
import { CompetitorListContext } from "./CompetitorListContextProvider";
import Container from "./Container";

function index() {
  return (
    <CompetitorListContext>
      <Container />
    </CompetitorListContext>
  );
}

export default index;
