import { CompetitionContextProvider } from "./CompetitionContextProvider";
import Container from "./Container";

function Competition() {
  return (
    <CompetitionContextProvider>
      <Container />
    </CompetitionContextProvider>
  );
}

export default Competition;
