import Container from "./Container";
import { CompetitorContextProvider } from "./CompetitorContextProvider";

function index() {
  return (
    <CompetitorContextProvider>
      <Container />
    </CompetitorContextProvider>
  );
}

export default index;
