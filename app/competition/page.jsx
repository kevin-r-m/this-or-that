import CompetitionContent from "../components/Layout/CompetitionContent";
import { getCompetition } from "../services/api/competitor";

async function page() {
  const res = await getCompetition();

  return <CompetitionContent initialData={res.data[0]} />
}

export default page;
