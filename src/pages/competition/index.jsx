import React from "react";
import { CompetitionContextProvider } from "./CompetitionContextProvider";
import Competition from "../../components/competition/Competition/Competition";
import Metrics from "../../components/competition/Metrics/Metrics";

function index() {
  return (
    <div>
      <CompetitionContextProvider>
        <Metrics />
        <Competition />
      </CompetitionContextProvider>
    </div>
  );
}

export default index;
