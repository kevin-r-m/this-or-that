import { CompetitionContextProvider } from "./CompetitionContextProvider";
import Container from "./Container";

function index() {
  return (
    <CompetitionContextProvider>
      <Container />
    </CompetitionContextProvider>
  );
}

export default index;
