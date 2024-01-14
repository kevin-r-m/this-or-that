import { CompetitionContextProvider } from "./CompetitionContextProvider";
import { useDataContext } from "@/app/services/context/DataContext";
import Container from "./Container";

function Competition() {
  const { competitionData } = useDataContext();

  return (
    <CompetitionContextProvider competitionData={competitionData}>
      <Container />
    </CompetitionContextProvider>
  );
}

export default Competition;
