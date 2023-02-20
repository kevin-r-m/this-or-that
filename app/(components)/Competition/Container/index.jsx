"use client";

import { useCompetitionContext } from "../CompetitionContextProvider";
import CompetitorCard from "../CompetitorCard";

function Container() {
  const { competitionState } = useCompetitionContext();

  return (
    <section>
      <CompetitorCard competitorName={competitionState.competitorOne.name} />
      <CompetitorCard competitorName={competitionState.competitorTwo.name} />
    </section>
  );
}

export default Container;
