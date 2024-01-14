import CompetitionContent from "../components/Layout/CompetitionContent";
import { getCompetition } from "../utils/competitor";

async function page() {
  const res = await getCompetition();

  return <CompetitionContent competitionData={res} />
}

export default page;
